import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../utils/UserResume";
import DoubleButton from "./DoubleButton";

export default function Career() {
  const navigate = useNavigate();
  const resume = useResume();
  const [career, setCareer] = useState('');

  const handleChange = ({target}) => {
    const { value } = target;
    setCareer(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    resume.setResume('career', career);
    navigate('/build-resume/experience');
  }

  return (
    <div className='builder-body'>
      <div className="title">Career Objective</div>
      <form onSubmit={handleSubmit} action="">
        <textarea 
          onChange={handleChange}
          name="objective" 
          rows="7" 
          placeholder='Convince your employer!'></textarea>
        <DoubleButton text='Save' />
      </form>
    </div>
  )
}
