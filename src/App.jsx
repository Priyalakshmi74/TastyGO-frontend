
import './App.css'
import Card from './components/card'
import Navbar from './components/navBar'
import Welcome from './components/welcome'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Card/>
    </div>
  )
}

export default App
