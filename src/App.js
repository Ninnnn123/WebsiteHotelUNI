import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from './home page/home';
import About from './about page/about';
import Room from './room page/room';
import Spa from './spa page/spa';
import Dining from './dining page/dining';
import Gallery from './gallery page/gallery';
import Activities from './activities page/activities';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/spa' element={<Spa/>}/>
        <Route path='/dining' element={<Dining/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;