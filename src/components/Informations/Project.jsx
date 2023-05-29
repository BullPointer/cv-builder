import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../utils/UserResume";
import DoubleButton from "./DoubleButton";
import SingleForm from "./SingleForm";

export default function Project() {
  const navigate = useNavigate();
  const resume = useResume();
  const [project, setProject] = useState({
    projectTitle: '',
    details: '',
    date: '',
  })
  const handleChange = ({target}) => {
    const { name, value } = target;
    setProject({...project, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    resume.setResume('project', project);
    navigate('/cv-builder/build-resume/certification');
  }
  
  return (
    <div className='builder-body'>
      <div className="title">Projects</div>
      <form onSubmit={handleSubmit} action="">
        <SingleForm 
          label='Project Title' 
          type='text' 
          name='projectTitle'
          value={project.projectTitle}
          onChange={handleChange}
        />
        <textarea 
          placeholder='Details' 
          name='details'
          value={project.details}
          onChange={handleChange}
        ></textarea>
        <SingleForm 
          label='End Date' 
          type='date' 
          name='date'
          value={project.date}
          onChange={handleChange}
        />
        <DoubleButton text='Save' />
      </form>  
    </div>
  )
}