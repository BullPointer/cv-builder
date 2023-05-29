// import React from 'react';
import { useState } from 'react';
import '../../assets/information.css';
import { useResume } from '../../utils/UserResume';
import DoubleButton from './DoubleButton';
import DoubleForm from './DoubleForm';
import SingleForm from './SingleForm';

export default function Education() {
  const { setResume, close, showResume } = useResume();
  const [education, setEducation] = useState({
    schoolName: '',
    schoolLocation: '',
    degree: '',
    date: '',

  });
  const handleChange = ({target}) => {
    const { name, value } = target;
    setEducation({...education, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setResume('education', education); 
    if (close) showResume();
  } 

    return (
      <div className='builder-body'>
          <div className="title">Enter your education</div>
          <div className="msg">
          Please provide information on any colleges, vocational 
          programs, or training courses you have completed or attented, 
          even if not completed.
          </div>
          <form onSubmit={handleSubmit} action="">
            <DoubleForm
            labelOne='School Name'
            labelTwo='School Location'
            type="text"
            nameOne='schoolName'
            nameTwo='schoolLocation'
            value1={education.schoolName}
            value2={education.schoolLocation}
            onChange={handleChange}
            />
            <SingleForm
            label='Degree'
            type="text"
            name='degree'
            value={education.degree}
            onChange={handleChange}
            />
            <SingleForm
            label='Graduation Date'
            type="date"
            name='date'
            value={education.date}
            onChange={handleChange}
            />
            <DoubleButton 
            text='View Resume'
            />
          </form>
      </div>
    )
  }
  