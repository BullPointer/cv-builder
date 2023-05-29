/* eslint-disable no-undef */
import { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../../utils/UserResume';
import CheckBox from './CheckBox';
import DoubleButton from './DoubleButton';
import DoubleForm from './DoubleForm';
import SingleForm from './SingleForm';

export default function Experience() { 
  const navigate = useNavigate();
  const resume = useResume();
  const [country, selectCountry] = useState('');
  const [experience, setExperience] = useState({
    title: '',
    company: '',
    details: '',
    date: '',
  })

  const handleChange = ({target}) => {
    const { name, value } = target;
    setExperience({...experience, [name]: value}); 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    resume.setResume('experience', {...experience, country})
    navigate('/cv-builder/build-resume/project');
  }

  return (
      <div className='builder-body'>
        <div className="title">Add Company</div>
        <form onSubmit={handleSubmit} action="">

          <DoubleForm 
            labelOne='Job Title'
            labelTwo='Company/Organisation Name'
            type='text'
            nameOne='title'
            nameTwo='company'
            value1={experience.title}
            value2={experience.company}
            onChange={handleChange}
          />
          <CountryDropdown
            className="dropdown"
            value={country}
            onChange={(val) => selectCountry(val)} 
          />
          <textarea 
            style={{marginTop: '10px'}}
            placeholder='Details' 
            name='details'
            value={experience.details}
            onChange={handleChange}
          ></textarea>
          <SingleForm 
            label='End Date'
            type='date'
            name='date'
            value={experience.date}
            onChange={handleChange}
          />
          <CheckBox />
          <DoubleButton 
          text='Save'
          />
        </form>
      </div>
    )
  }
  