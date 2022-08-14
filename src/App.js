
import  classes from './App.module.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import Portfolio from './component/Portfolio';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact'

import Home from './component/Home';
import Navbar from './component/navBar/Navbar';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import particles from './assets/particles';

function App() {

  const location = useLocation();
  console.log(location); 

const handleinit = async (main) =>(
  await loadFull(main)
)

const renderParticleJsInHomePage = location.pathname === '/';


  return (
    <div className={classes.app}>
      {/*particles js*/}
       { renderParticleJsInHomePage && (<Particles  id='particles' options={particles} init={handleinit}/>)}

       {/* navbar*/}
       <Navbar />
         {/* main page content*/}
      
      <div className={classes.appMainPageContent}>
      
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        
        <Route  path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route  path='/contact' element={<Contact/>} />
      </Routes>

      </div>
      
    </div>
  );
}

export default App;
