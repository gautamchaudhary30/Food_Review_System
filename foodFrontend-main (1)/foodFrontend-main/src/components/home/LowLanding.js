import React ,{useEffect,useRef}from 'react';
import Rellax from "rellax";
import "./LowLanding.css";

const LowLanding = () => {
    const rellaxRef = useRef();
    useEffect(() => {
        new Rellax(".headline", { // <---- Via class name
          speed: -1,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });
        new Rellax(".box", { // <---- Via class name
          speed: -3,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });
        new Rellax(".pattern", { // <---- Via class name
          speed: -5,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });
        
    
        // new Rellax(rellaxRef.current, { // <---- Via useRef element
        //   speed: -10,
        //   center: false,
        //   wrapper: null,
        //   round: true,
        //   vertical: true,
        //   horizontal: false
        // });
      }, []);
  return (<div className='body'>

  <div className="container">
  <div className="image">
    <h1 className="headline rellax" data-rellax-speed="-1">The<br/>Best<br/>Food<br/>In LPU</h1>
    <div className="box rellax" data-rellax-speed="-3"></div>
    <div className="pattern rellax" data-rellax-speed="5"></div>
  </div>
</div>
  </div>
  )
}

export default LowLanding
