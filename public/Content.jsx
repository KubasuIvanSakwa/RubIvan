import { useState, useEffect } from "react"
import Card from "./Card"
import NotLoaded from "./Notloaded"

function Content() {
 const [Disaster, setDisaster] = useState([])
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
   .then(res => res.json())
   .then(data => {
    setDisaster(data.events)
    setIsLoading(false)
   })
  .catch((error) => {
    setIsLoading(false);
  })
 }, [])

 if (isLoading) {
  return <div className="not-loaded">
            <div class="loader">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
         </div>;
}

if (Disaster.length === 0) {
  return <NotLoaded />;
}

 const CardElement = Disaster.map(ev => {
  const {categories, geometry } = ev
  const cat = categories.map(cate => cate.title)
  console.log(cat)
  return (
      <Card
        key={ev.id}
        cat={cat}
        title={ev.title}
        content={ev.link}
      />
 )})
  

  return (
    <div className="Content">
        <h4>Top News</h4> 
        <hr />
        <div>
          {CardElement}
        </div>
    </div>
  )
}

export default Content