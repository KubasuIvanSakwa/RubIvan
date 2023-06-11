import Brief from "./Brief"
import Content from "./Content";
import Userdashboard from "./Userdashboard";


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
         <Userdashboard />
    <footer>
    </footer>
    </div>
  )
}

export default Home