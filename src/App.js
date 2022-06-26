import './App.css'
{/* import the zodiac array */}
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { zodiac } from './data'


function App() {
  return (
    <div className="App">
      <Header name = 'Pete' />{/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <Footer year = '2022' />{/* the Footer component needs a year passed in as the `year` prop */}
      <Main zodiacs={zodiac} />{/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  )
}
export default App
