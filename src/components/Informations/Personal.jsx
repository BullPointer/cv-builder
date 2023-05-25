// import React from 'react';
import '../../assets/personal.css';

export default function Personal() {
    return (
      <div className='builder-body'>
          <div className="builder-container">
          <div className="title">Contact Information</div>
          <div className="msg">
            Your contact information is prominently displayed on the 
            header of your resume, ensuring potential employers 
            can reach you easily. We prioritize your privacy and keep 
            your information confidential.
          </div>
          <form action="">
            <div className="name">
                <div className="name-box">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstname" />
                </div>
                <div className="name-box">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastname" />
                </div>
            </div>
          </form>
          </div>
      </div>
    )
  }
  