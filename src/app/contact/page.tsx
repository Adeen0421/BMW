import React from 'react';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-particles'>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
            </div>
            <section className='Contact-form'>
                <h2 className='fade-in'>Contact Us</h2>
                <form>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='tel'
                            placeholder='Phone Number'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <textarea
                            placeholder='Your Message'
                            rows={5}
                            required
                        ></textarea>
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
 