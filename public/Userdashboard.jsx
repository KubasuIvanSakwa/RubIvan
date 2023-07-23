function Userdashboard() {
  console.log("returning")
  return (
    <div className="dash">
        <section className="about">
          <div></div>
          <h3>Kubasu Ivan</h3>
          <p className="stats">4star</p>
          <p>My categories</p>
          <p>Date joined</p>
          <p>Edit info</p>
        </section>

        <section>
          <div>recently viewed</div>
          <p>page time</p>
          <p>favorites</p>
        </section>
    </div>
  )
}

export default Userdashboard