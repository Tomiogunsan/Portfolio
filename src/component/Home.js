import React from 'react';
import classes from './Home.module.css';
import {useNavigate} from 'react-router-dom';
import {Animate} from 'react-simple-animate';
import {FaLinkedin, FaTwitterSquare} from "react-icons/fa";

const Home = () => {

    const navigate = useNavigate();
    console.log(navigate);

    const handleNavigateToContactMePage = () =>{
        navigate('/contact')
    };

return(
     <section id='home' className={classes.home}>
            <div> 
                <h1>
                    Hello, I'm Tomi
                    </h1>
                    </div>

                    <div>
                    <h2>
                    A front end developer from Nigeria
                    </h2> 
                    </div>

                    <div className={classes.social}>
                    
                    <a href='https://www.linkedin.com/in/tomi-ogunsan-546320101/' target="_blank" rel="noreferrer">
                       <FaLinkedin/>
                    </a>
                    <a href='https://twitter.com/Pretomia2' target="_blank" rel="noreferrer">
                       <FaTwitterSquare />
                    </a>
                    
                    </div>

            <Animate play 
            duration={1.5}
            delay={1}
            start={
                {transform: 'translatex(550px)'}
            }
            end={
                {transform: 'translateY(0px)'}
            }>
            <div className={classes.button}>
                <button onClick={handleNavigateToContactMePage}>Hire me</button>
                
                </div>
            </Animate>
            
     </section>
)
}

export default Home;