import React from 'react';

const Contact = () => {
  return (
    <div className="container w-100 mt-1 p-3 rounded  ">
      <h3 className="text-center mb-4 text-light">Contact <span className="text-success">Me</span></h3>
    <div className='contact'>
    <div className="contact-section w-100 nav-item text-light ">
            <p className='d-flex' >Email: <a className='nav-link' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new ">mothilalmsmm2705@gmail.com</a></p>
            <p className='d-flex'>Phone: <a className='nav-link' href="tel:+91 7708089097">7708089097</a></p>
            <p className='d-flex'>Follow me: <a className='nav-link' href="https://www.linkedin.com/in/mothilal-sanjay-e-709a59192/">LinkedIn</a></p>
        </div>
      <section className="contact-form w-100 p-1 " >
        <form style={{backgroundColor:"grey", borderRadius:"1rem", boxShadow:"0 0 10px 1px #dde3ed" }} className='p-5'>
           <input type="text" className="form-control mb-2" id="name" name="name" placeholder="Full Name" required />
          <input type="email" className="form-control mb-2" id="email" name="email" placeholder="email address"
              required/>
            <input className="form-control mb-2" id="message "  placeholder="mail subject" required />
            <input className="form-control mb-2" id="message "  placeholder="mobile number" required />
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-success btn-lg w-50 rounded-pill ">Submit</button>
          </div>
        </form>
      </section>
    </div>
    </div>
  );
};

export default Contact;
