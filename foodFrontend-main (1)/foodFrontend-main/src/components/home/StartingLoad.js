import React, { useEffect } from 'react'
import "./StartingLoad.css"
import $ from "jquery";
import Image1 from "../../Image/pexels-robin-stickel-70497.jpg"
import Image2 from "../../Image/pexels-tijana-drndarski-3338681.jpg"
import Image3 from "../../Image/pexels-marta-dzedyshko-2067396.jpg"
import Image4 from "../../Image/pexels-brigitte-tohm-378008.jpg"
import Image5 from "../../Image/pexels-layyana-sheridean-2846337.jpg"

const LowLanding2 = () => {
    useEffect(()=>{
        document.getElementById('otp-container').className = 'loaded';
    },[])
  return (<div className='bodyLow2'>
    <div id="otp-container">
          <img src={Image1} id="image-1" className="photo" alt=""/>
          <img src={Image2} id="image-2" className="photo" alt=""/>
            <img src={Image3} id="image-3" className="photo" alt=""/>
            <img src={Image4} id="image-4" className="photo" alt=""/>
            <img src={Image5} id="image-5" className="photo" alt=""/>
                <div className="otp-callout">
                  <h3 className='namaste'>NAMASTE</h3>
                  <h3> ANIL</h3>
                  <h3>SIR</h3>
                {/* <img src="http://fixturemedia.com/fixturemedia_2013_html5/mobile_otp/images/logo.png" id="logo" alt=""/>
                <img src="http://fixturemedia.com/fixturemedia_2013_html5/mobile_otp/images/text.png" id="text" alt="Understanding UX"/>
                  <a href="http://fixturemedia.com/portfolio-3-columns.html" id="button" ></a> */}
            </div>
            <div className="otp-foot">
                <a href="#" id="close"></a>
            </div>
        </div>
</div>
  )
}

export default LowLanding2
