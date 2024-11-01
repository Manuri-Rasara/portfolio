import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Homecontent from './Components/Homecontent';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Help from './Components/Help';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Load from './Components/Load';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <>
      {!loadingComplete ? (
        <Load onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar />
          <Homecontent />
          <About />
          <Technologies />
          <Projects />
          <Help />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
