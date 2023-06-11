
function Card({ title, content, cat}) {

  return (
      <section className="card">
          <div className="context">
            
              <h2>
                {cat}
              </h2>

              <h3>
                {title}
               </h3>

              <p className="magnitude">
                 {content}
              </p>

          </div>
      </section>
  )
}

export default Card