import { useState,useEffect } from 'react'
import logo from './assets/logo.png';
import plane from './assets/plane.png';
import path from './assets/flightpath.png';
import calendar from './assets/calendar.png';
import location from './assets/location.png';
import user from './assets/user.png';
import TrackCard from './components/TrackCard';
import Timelinecardleft from './components/timelinecardleft';
import Timelinecardright from './components/timelinecardright';
import Footer from './components/Footer';
import Navbar from './components/Navbar';




function App() {
  const [showArrow1, setShowArrow1] = useState(true);
  const [showArrow2, setShowArrow2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      if (scrollY < window.innerHeight * 0.5) {
        // Top half of Section 1 → show Arrow1
        setShowArrow1(true);
        setShowArrow2(false);
      } 
      else if (scrollY < window.innerHeight * 1.5) {
        // In Section 2 → show Arrow2
        setShowArrow1(false);
        setShowArrow2(true);
      } 
      else {
        // Scrolled to Section 3
        setShowArrow1(false);
        setShowArrow2(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <>
      <div>
      <Navbar />
      </div>
      <div className="flex flex-col items-center w-full min-h-[380vh] bg-[url('./assets/bluespace.jpg')] bg-fixed bg-cover bg-center relative">
        <img 
          src={logo} 
          alt="LOGO" 
          className="mt-20 object-contain -z-5"
        />

        <div className="-mt-10 font-mono text-4xl text-white font-bold rounded-2xl">
        MULTIVERSE OF</div>
        <div className="text-3xl font-mono text-white font-bold rounded-2xl ml-20">
        INNOVATION</div>
        
        <img 
        src={path} 
        alt="img"
        className='object-contain z-12 h-16 -mt-14 -ml-52' />

        <img 
        src={plane} 
        alt="img" 
        className='object-contain z-10 h-16 -mt-20 -ml-24' />

        <div className="text-center my-8 mx-4 text-slate-400">
        What if your solution was implemented in a parallel world</div>

        {showArrow1 && (
        <div className=" bottom-10 animate-bounce">
          <p className="text-white text-4xl">↓</p>
        </div>
        )}
        <div id="about" className='my-16 scroll-mt-24 flex flex-col justify-center '>
            <div className='text-white text-4xl font-bold text-center z-10'>
              ABOUT THE EVENT
            </div>
            <div className='text-slate-300 text-center mt-10 mx-4'>
            Aavishkar 4.0 is a celebration of innovation and creativity for young minds. Come up with new ideas to reshape this world into a better one.
            </div>
            <div className='text-slate-300 font-serif font-semibold text-center mt-12 text-xl'>
            Organisers : 
            </div>
            <div className='text-white font-serif font-semibold text-center mt-3 text-2xl'>
            ISTE & IIC  
            </div>
            <div className='text-white text-4xl font-bold text-center mt-24'>
              Event Details
            </div>
            <div className='flex flex-row items-center bg-blue-900 mx-10 rounded-xl mt-8 h-auto '>
              <img src={calendar} alt="date" className='justify-start h-6 m-3' />
              <div className='text-white flex-1 flex justify-center -ml-12 font-sans font-bold text-xl'>
                17 / May / 2025
              </div>
            </div>
            <div className='flex flex-row items-center bg-blue-900 mx-10 rounded-xl mt-4 h-auto '>
              <img src={location} alt="date" className='justify-start h-6 m-3' />
              <div className='text-white flex-1 flex justify-center -ml-12 font-sans font-bold text-xl'>
                Seminar Hall
              </div>
            </div>
            <div className='flex flex-row items-center bg-blue-900 mx-10 rounded-xl mt-4 h-auto '>
              <img src={user} alt="date" className='justify-start h-6 m-3' />
              <div className='text-white flex-1 flex justify-center -ml-12 font-sans font-bold text-xl'>
                Solo & Duo
              </div>
            </div>
            
        </div>
      <div id="tracks" className='flex scroll-mt-24 flex-col h-auto'>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl mb-10 font-mono font-bold">Event Tracks</h1>

          <TrackCard 
            title="WEB 3"
            description="In a world reimagined by Web3, trust becomes the default and centralized control fades away. Imagine a new reality where ownership is truly yours, transactions are transparent, and communities thrive in decentralized ecosystems. Your innovations could build a freer, fairer world — one block at a time."
          />

          <TrackCard 
            title="Cyber Security"
            description="With groundbreaking cybersecurity solutions, the new world would be a fortress of digital trust. Imagine a future where data breaches are myths, personal identities are unbreakable, and security enables innovation rather than hindering it. Your solutions could build a safer, fearless society."
          />

          <TrackCard 
            title="AI & ML"
            description="By unlocking the true potential of AI and ML, you could create a world where machines not only assist but also elevate human potential. Imagine societies where intelligent systems predict needs, solve problems instantly, and open doors to breakthroughs we never thought possible."
          />

          <TrackCard 
            title="IoT"
            description="Through the Internet of Things, you can weave a smarter, responsive world where everything — from homes to cities — adapts to human needs seamlessly. Imagine a parallel future where daily life is effortless, efficient, and deeply connected to the environment around us."
          />

          <TrackCard 
            title="AR/VR"
            description="With AR and VR, you hold the power to create worlds within our world. Imagine a future where learning, healing, and creating aren't limited by physical boundaries — where experiences feel as real as life itself, reshaping industries and human interaction forever."
          />

          <TrackCard 
            title="Open Innovation"
            description="Open Innovation opens endless doors. Imagine a reality where collaboration defeats competition, where boundaries between industries blur, and ideas flow freely to build the most creative, adaptive societies. Your innovation could spark a world beyond imagination."
          />
        </div>
      </div>
      <div id="timeline" className='text-white scroll-mt-20 mt-24 font-mono font-bold text-4xl'>
        Event Timeline
      </div>
      <div className='flex flex-row gap-4 items-start'>
        <div className='mt-12'>
        <Timelinecardleft 
                    title="Coming Soon"
                    description="Check out poster on Instagram at iste_abesit"
                    date="23/4/25"
                  />
        </div>
            <div className='min-h-[70vh] mt-12 rounded-full bg-gray-600 flex flex-col w-2'>
            <div className="bg-blue-600 rounded-full min-h-[12vh]">
              
            </div>
            <div className='relative rounded-full bg-sky-400 w-5 h-5 z-4 -mt-2 -ml-1.5'></div>
            <div className='relative rounded-full bg-sky-400 animate-ping z-2 w-5 h-5 opacity-75 -ml-1.5 -mt-5'></div>
            
            </div>
                <div className="mt-28 flex flex-col">
          
                <Timelinecardright 
                  title="Event partner"
                  description=" Hack2Skill as platform partner was released"
                  date="24/4/25"
                />
                

                  


                  
                </div>
            
      </div>
      <div className='mt-20'>
      <Footer/>
      </div>

      </div>
      
    </>
  )
}

export default App;