function SideNav() {

  const [cat, setCat] = useState([])

  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
     .this(res => res.json)
     .this(data => console.log(data.events.category))
  })

  return (
    <div className="side-nav">
      <h3>Categories</h3>
           
    </div>
  )
}

export default SideNav