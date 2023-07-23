import { Link } from "react-router-dom"

function Card({ title, content, cat, magnitude, date}) {

  return (
      <section className="card">
          <div className="context">
            <Link to="/"  className="context-btn btn1">Read more</Link>
            <h2>Name: {title}</h2>
            <div className="image"><div/>
            <div className="cont">
              <p className="cord">Cordinates:</p>
              {magnitude && <p className="magnitude">magnitude: {magnitude}</p>}
              <p className="date">Date: {date}</p>
            </div>
            <Link to="/"  className="context-btn btn2" >{cat}</Link>
              {/* <h2>
                {cat}
              </h2>

              <h3>
                {title}
               </h3>

              <p className="magnitude">
                 {content}
              </p> */}
          </div>
          </div>
      </section>
  )
}

export default Card