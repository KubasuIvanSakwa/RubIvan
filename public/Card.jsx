import Disaster1 from "../src/assets/disaster1.webp"

function Card() {
  return (
      <section className="card">
          <div className="context">
              <h3>Lorem Ipsum</h3>
              <p>
                  Lorem Ipsum lorem
                  ipsum lorem ipsum
                  lorem ipsum
                  Lorem Ipsum lorem
                  ipsum lorem ipsum
                  lorem ipsum
                  Lorem Ipsum lorem
                  ipsum lorem ipsum
                  lorem ipsum
              </p>
          </div>
          <img src={Disaster1}/>
      </section>
  )
}

export default Card