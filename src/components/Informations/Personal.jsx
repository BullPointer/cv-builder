import { useState } from 'react';
import '../../assets/information.css';
import DoubleButton from './DoubleButton';
import DoubleForm from './DoubleForm';
import SingleForm from './SingleForm';
import Joi from 'joi';
import { Icon } from '@iconify/react';
import { useAuth } from '../../utils/Auth';
import { useResume } from '../../utils/UserResume';
import { errorSubmit } from '../Errorhandler';
import { useNavigate } from 'react-router-dom';

export default function Personal() {
  const navigate = useNavigate();
  const authImg = useAuth();
  const resume = useResume();
  const [error, setError] = useState(null);
  const [previews, setPreviews] = useState(null);
  const [personal, setPersonal] = useState({
    firstname: '',
    lastname: '',
    title: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
  });
   
  const schema = Joi.object({
    firstname: Joi.string().min(3),
    lastname: Joi.string().min(3),
    title: Joi.string().min(3),
    country: Joi.string().min(3),
    city: Joi.string().min(0),
    state: Joi.string().min(0),
    zipCode: Joi.string().label('Password Field').min(0), // .regex(/^(0-9)$/g)
    email: Joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  })
  
  const handleChange = ({target}) => {
    const { name, value } = target;
    setPersonal({...personal, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = errorSubmit(schema, personal);
    if (!error) {
      resume.setResume('personal', personal);
      navigate('/cv-builder/build-resume/career');
    }
    setError(error);
  }

  const handleImage = ({ target }) => {
    let image = URL.createObjectURL(target.files[0]);
    setPreviews(image);
    authImg.setImg(image);
    // URL.revokeObjectURL(image);
  }

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
          <form onSubmit={handleSubmit} action="">
            <div className='select-img'>
              <div className='img-box'>
                {
                  !previews ?
                  <Icon className="profile-img" icon="gg:profile" />
                  : <img src={previews} alt=""  />
                }
              </div>
              <label> + <input 
                  type="file" 
                  name="image"
                  accept='image/jpg, image/jpeg, image/png'
                  onChange={handleImage}
                />
              </label>
            </div> 

            <DoubleForm 
            labelOne='First Name'
            labelTwo='Last Name'
            type="text"
            nameOne='firstname'
            nameTwo='lastname'
            value1={personal.firstname}
            value2={personal.lastname}
            onChange={handleChange}
            error={error}
            />
            <SingleForm 
            label='Job Title'
            type='text'
            name='title'
            value={personal.title}
            onChange={handleChange}
            error={error}
            />
            <DoubleForm 
            labelOne='Country'
            labelTwo='City'
            type="text"
            nameOne='country'
            nameTwo='city'
            value1={personal.country}
            value2={personal.city}
            onChange={handleChange}
            error={error}
            />
            <DoubleForm 
            labelOne='State/Province'
            labelTwo='Zip Code'
            type="text"
            nameOne='state'
            nameTwo='zipCode'
            value1={personal.state}
            value2={personal.zipCode}
            onChange={handleChange}
            error={error}
            />
            <SingleForm 
            label='Email'
            type='text'
            name='email'
            value={personal.email}
            onChange={handleChange}
            error={error}
            />
            <DoubleButton 
            text='Continue'
            />
            </form>
        </div>
      </div>
    )
  }
  