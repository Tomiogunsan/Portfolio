import React from 'react';
import PageHeaderContent from './PageHeaderContent/PageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs';
import classes from './About.module.css';
import {Animate} from 'react-simple-animate';
const personalDetails =[
    {
        label: 'Name:',
        value: ' Tomi Ogunsan',
    },
    {
        label: 'Age:',
        value: ' 29',
    },
    {
        label: 'Address:',
        value: ' Abuja',
    },
    {
        label: 'Email:',
        value: ' tomiafolayan@gmail.com',
    },
    {
        label: 'Phone Number:',
        value: ' +2347032711297',
    },

]

const aboutMe = "From a stay-home-mom to the lines of code. I'm a versatile front-end developer passionate about technology. I've been developing and working on projects with my skills in Javascript programming using framework such as React. I'm curious about technology, passionate about solving problems and enjoy learning new skills. When i'm not coding, i'm probably hanging out with my husband, being entertained by our amazing 1 year old little boy."



const About = () => {
return(
    <section id='about' >
        <PageHeaderContent
        headerText = 'About Me'
        icon = {<BsInfoCircleFill  size={40} />}
        />

        <div className={classes.about}>
           <div className={classes.aboutInfo}>
        <Animate play 
            duration={1.5}
            delay={1}
            start={
                {transform: 'translatex(-900px)'}
            }
            end={
                {transform: 'translateY(0px)'}
            }>
        <h3>Front End Developer</h3>
        <p>{aboutMe}</p>
        </Animate>
        </div>
        <div>
        <Animate play 
            duration={1.5}
            delay={1}
            start={
                {transform: 'translatex(500px)'}
            }
            end={
                {transform: 'translateY(0px)'}
            }>

        <h3>Personal Information</h3>
            <ul>
                {personalDetails.map((item,index) =>
                <li key={index}>
                    <span className={classes.title}>{item.label}</span>
                    <span className={classes.value}>{item.value}</span>
                </li>)}
            </ul>
            </Animate>
            </div>

            
        </div>

        
       
    </section>
)
}

export default About;