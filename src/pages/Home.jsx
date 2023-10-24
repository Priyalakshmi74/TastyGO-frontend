import Navbar from "../components/navBar";
import Welcome from "../components/welcome";
import Card from "../components/card";
import Dish from "../components/dishes";

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Card />
      <Dish />
    </div>
  );
}

export default Home;
