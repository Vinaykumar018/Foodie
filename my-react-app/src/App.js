import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import About from './Components/About';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import Team from './Components/Team';
import Testimonals from './Components/Testimonals';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
    <Navbar></Navbar>
    <Service></Service>
    <About></About>
    <Menu></Menu>
    <Team></Team>
    <Testimonals></Testimonals>
    <Footer></Footer>

    </div>
  );
}

export default App;
