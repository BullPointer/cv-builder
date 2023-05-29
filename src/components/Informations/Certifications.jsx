import { useState } from "react";
import { Icon } from '@iconify/react';
import DoubleButton from "./DoubleButton";
import SingleForm from "./SingleForm";
import { useResume } from "../../utils/UserResume";
import { useNavigate } from "react-router-dom";

export default function Certifications() {
  const navigate = useNavigate();
  const resume = useResume();
  const [count, setCount] = useState(1);
  const [certifications, setCert] = useState([{name: 'cert0', value: ''}]);

  const handleAddCert = () => {
    setCount(count + 1);
    const obj = {name: `cert` + count, value: ''}
    setCert([...certifications, obj])
  }
  const handleChange = (index) => ({target}) => {
    const { value } = target;
    const newCert = certifications.map((item, num) => {
      if (index === num) return {...item, value}
      return item;
    })
    setCert(newCert);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    resume.setResume('certifications', certifications);
    navigate('/build-resume/education');
  }

  return (
    <div className='builder-body'>
      <div className="title">
        Do you have any licenses or certifications?
      </div>
      <div className="msg">
        Enter your licenses or certifications one at a time.
      </div>
      <form onSubmit={handleSubmit} action="">
        {
          certifications.map((val, index) => { 
            return (
              <SingleForm 
                key={index}
                label='Licence or Certification' 
                type='text' 
                name={certifications[index].name}
                value={certifications[index].value}
                onChange={handleChange(index)}
              />
          )})
        }
        <div onClick={handleAddCert}  className="cert-box">
          <Icon className="cert-icon" icon="el:plus-sign" />
          <div className="cert-msg">
            Add License / Certification
          </div>
        </div>
        <DoubleButton text='Continue' />
      </form>
    </div>
  )
}
  