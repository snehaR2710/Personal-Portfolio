
import Styles from './App.module.css';
import { About } from './Components/About/About.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { Hero } from './Components/Hero/Hero.jsx';
import { NavBar } from './Components/NavBar/NavBar.jsx';
import { Works} from './Components/works/Works.jsx'

function App() {

  return (
    <div className={Styles.App}>
    <NavBar />
    <Hero />
    <About />
    <Works />
    <Contact />
    </div>
  )
}

export default App
