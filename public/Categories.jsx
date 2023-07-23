import { Link } from "react-router-dom"

function Categories() {
  return (
    <nav className="cat-nav">
      <Link>Severe Storms</Link>
      <Link>Sea and Lake Ice</Link>
      <Link>Volcanoes</Link>
      <Link>Wildfires</Link>
    </nav>
  )
}

export default Categories