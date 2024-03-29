import React,{ useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        const serciceID = 'service_tp00usf'
        const templateID = 'template_srumrco'
        const userID = 'NIn2Bd-tY0JYxEBY-'

    
        emailjs.sendForm( serciceID, templateID, form.current, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
      };
  return (
    <div className='contacts'>
        <div className="text-center">
            <h1>Contact us</h1>
            <p>Please fill out the form...</p>
        </div>
        <div className="container">
            <form ref={form} onSubmit={sendEmail}> 
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* name input */}
                        <div className="text-center">
                            <input 
                            type="text" 
                            className='form-control'
                            placeholder='name'
                            name='name'
                            />
                            <div className="line"></div>                                
                        </div>
                        {/* phone input */}
                        <div className="text-center">
                            <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter your number'
                            name='phone'
                            />
                            <div className="line"></div>                                
                        </div>
                        {/* email */}
                        <div className="text-center">
                            <input 
                            type="email" 
                            className='form-control'
                            placeholder='seyidhuseyn02@gmail.com'
                            name='email'
                            />
                            <div className="line"></div>                                
                        </div>
                        {/* subject */}
                        <div className="text-center">
                            <input 
                            type="text" 
                            className='form-control'
                            placeholder='Enter your subject'
                            name='subject'
                            />
                            <div className="line"></div>                                
                        </div>
                        {/* ---- */}
                    </div>
                    {/* sag terefi */}
                    <div className="col-md-6" col-xs-12>
                        {/* message */}
                        <div className="text-center">
                            <textarea 
                                type="text" 
                                className='form-control' 
                                placeholder='Describe your need' 
                                name='message'>
                            </textarea>
                            <div className="line"></div>
                        </div>
                        <button type='submit' className='btn-main-offer contact-btn'>Contact us</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact