import { useState, useEffect } from "react"
import Card from "./Card"

function Content() {
 const [Disaster, setDisaster] = useState([])

 useEffect(() => {
  fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
   .then(res => res.json())
   .then(data => console.log(setDisaster(data.events)))
 }, [])

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