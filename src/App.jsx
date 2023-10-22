
import './App.css'
import Card from './components/card'
import Dish from './components/dishes'
import Navbar from './components/navBar'
import Welcome from './components/welcome'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Card/>
      <Dish/>
    </div>
  )
}

export default App
