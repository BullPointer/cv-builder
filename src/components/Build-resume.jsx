/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import '../assets/builder.css';
import { Outlet } from 'react-router-dom';
import { ResumeNav } from '../Navbar/ResumeNav';
import { ResumeSidebar } from '../Navbar/ResumeSidebar';
import Resume from './Informations/Resume';
import { useResume } from '../utils/UserResume';

export const Build = () => {
  const { warning } = useResume();
  const [close, setClose] = useState(true);

  const rmResume = () => {
    setClose(true);
  }
  const showResume = () => {
    setClose(false);
  }
  return (
    <>
    <Resume  
      close={close}
      rmResume={rmResume} 
    />
    {warning && <div className="warning">
      Personal information can't be empty!
    </div>}
    <ResumeNav 
      showResume={showResume}
    />
    <div className="builder">
      <ResumeSidebar />
      <Outlet />
    </div>

    </>
  )
}

