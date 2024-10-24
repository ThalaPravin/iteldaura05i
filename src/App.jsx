import './App.css'
import Navbar from './components/navbar';
import SubNavBar from './components/Header';
import About from './components/About';
import Hero from './components/Hero';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import BannerComponent from './components/Banner';
import DisplayComponent from './components/DisplayComponent';
import DisplayComponent2 from './components/DisplayComponent2';
import DisplayComponent6 from './components/DisplayComponent6';
import DisplayComponent3 from './components/DisplayComponent3';
import DisplayComponent4 from './components/DisplayComponent4';
import DisplayComponent5 from './components/DisplayComponent5';
import FreqAsked from './components/FreqAsked';

function App() {
 

  return (
   <>
   <Navbar/>
  
  <SubNavBar/>
   <Hero/>
   <About/>
   <BannerComponent/>
   <div className='mx-6 my-14'>
   <DisplayComponent/>
   <DisplayComponent2/>
   {/* <DisplayComponent3/>
   <DisplayComponent4/>
   <DisplayComponent5/> */}
   </div>
   <FreqAsked/>
   {/* <Blogs/> */}
   <Footer/>
   {/* <Footer/> */}
   </>
  )
}

export default App
