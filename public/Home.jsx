import Brief from "./Brief"

function Home() {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    const brief = "Your Briefing"

  return (
    <div className="Home">
        <Brief
          header={brief}
          dates={formattedDate}
        />
    <footer>
    </footer>
    </div>
  )
}

export default Home