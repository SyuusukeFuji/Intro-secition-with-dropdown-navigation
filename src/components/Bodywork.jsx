import React,{useState, useEffect} from "react";
import audiophileLogo from "../assets/images/client-audiophile.svg";
import databizLogo from "../assets/images/client-databiz.svg";
import makerLogo from "../assets/images/client-maker.svg";
import meetLogo from "../assets/images/client-meet.svg";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";

function Bodywork(){
    const[isMobile, setIsMobile]= useState(window.innerWidth < 770);
    
    useEffect(() => { const handleResize = () => { setIsMobile(window.innerWidth < 770); }; 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); }, []);


    return(
        <section id="content-wrap">
            <section id="left-wrap">
                <h1>Make <br/>remote work</h1>
                <p id="intro-pgraph">Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.</p>
                <button id="bt-learn" type="button">Learn more</button>

                <section id="clients-wrap">
                    <ul id="clients-list">
                        <li>
                            <img id="databiz-logo" src={databizLogo} alt="databiz client logo" />
                        </li>

                        <li>
                            <img src={audiophileLogo} alt="audiophile client logo" />
                        </li>

                        <li>
                            <img src={meetLogo} alt="meet client logo" />
                        </li>

                        <li>
                            <img src={makerLogo} alt="maker client logo" />
                        </li>
                    </ul>
                </section>

            </section>
            <section id="right-wrap">
            {/* 
                <section id="hero-wrap"></section> 
               */ }
               {!isMobile ? <img id="hero-desktop" src={heroDesktop} alt="Hero size for desktop" /> 
               : <img id="hero-mobile" src={heroMobile} alt="Hero size for mobile" /> }
            </section>
        </section>
    )
}

export default Bodywork;