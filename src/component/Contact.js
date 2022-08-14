import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from './PageHeaderContent/PageHeaderContent';
import { Animate } from 'react-simple-animate';
import classes from './Contact.module.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y0endg6', 'template_pz6wf5r', form.current, 'khLrTMFxN50snaz9F')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
      };

return(
     <section id='contact' className={classes.contact}>
        <PageHeaderContent
        headerText = 'Contact'
        icon = {<BsInfoCircleFill  size={40} />}
        />
        
        <div className={classes.contact}>
            <Animate 
            play
            duration ={1}
            delay={0}
            start={{transform: 'translateX(-200px)'}}
            end={{transform: 'translatex(0px)'}}>
                <h3 className={classes['contact-text']}>Let's talk</h3>

            </Animate>

            <Animate 
            play
            duration ={1}
            delay={0}
            start={{transform: 'translateX(200px)'}}
            end={{transform: 'translateX(0px)'}}>

                <form  ref={form} onSubmit={sendEmail} className={classes['contact-form']}>
                    <div className={classes['contact-form-controlswrapper']}>
                    <div>
                        
                        <input required name='user_name' className={classes.inputName} type='text'/>
                        <label htmlFor='name' className={classes.nameLabel}>Name</label>
                    </div>
                    <div>
                    
                        <input required name='user_email' className={classes.inputEmail} type='text'/>
                        <label htmlFor='email' className={classes.emailLabel}>Email</label>
                    </div>
                    <div>
                   
                        <textarea required name='message' className={classes.inputDescription} type='text' rows='5'/>
                        <label htmlFor='description' className={classes.descriptionLabel}>Description</label>
                    </div>
                    </div>
                        <button type='submit' value='Send'>Submit</button>
                
                </form>
            </Animate>
        </div>

    </section>

)
}

export default Contact;