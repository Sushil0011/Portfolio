import './App.css';
import Header, {Mininav} from './component/Header';
import Home from './component/Home';
import Work from './component/Work';
import Timeline from './component/Timeline';
import About from './component/About';
import Contact from './component/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './component/Footer';
import './styles/mediaquary.css';
import { useState } from 'react';

function App() {

  const [menuopen,setMenuopen]=useState(false);

  console.log(menuopen)
  return ( 

<>
<Mininav  menuopen={menuopen}  setMenuopen={setMenuopen} />
  <Header setMenuopen={setMenuopen}  menuopen={menuopen}/>
<Home/>
<About/>
<Work/>
<Timeline/>
<Contact/>
<Footer/>
<Toaster/>

</>
  
  );
}

export default App;


