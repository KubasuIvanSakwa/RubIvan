import { useState, useEffect } from "react"
import Card from "./Card"
import NotLoaded from "./Notloaded"


function Content() {
  const [Disaster, setDisaster] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("disasterData")

        if (storedData) {
          setDisaster(JSON.parse(storedData))
        } else {
          const response = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
          const data = await response.json()
          setDisaster(data.events)
          console.log(data)
          localStorage.setItem("disasterData", JSON.stringify(data.events))
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    };

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="not-loaded">
        <div className="loader">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    );
  }

  if (Disaster.length === 0) {
    return <NotLoaded />
  }

  const CardElement = Disaster.map((ev) => {
    const { categories, geometry } = ev
    const cat = categories.map((cate) => cate.title)
    const geo = geometry.map(go => go.magnitudeValue)   
    {/* magnitudeValue date coordinates magnitudeUnit*/}
    return <Card key={ev.id} cat={cat} title={ev.title} content={ev.link} magnitude={geo} date={geometry.date}/>
  })


  return (
    <div className="Content">
      <h4>Top News</h4>
      <hr />
      <div>{CardElement}</div>
    </div>
    
  )
}

export default Content
