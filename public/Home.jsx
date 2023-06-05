import Brief from "./Brief"
import Content from "./Content";


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
         <Content />
    <footer>
    </footer>
    </div>
  )
}

export default Home