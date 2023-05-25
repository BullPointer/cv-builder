import '../assets/builder.css';
import { Outlet } from 'react-router-dom';
import { ResumeNav } from '../Navbar/ResumeNav';
import { ResumeSidebar } from '../Navbar/ResumeSidebar';

export const Build = () => {

  return (
    <>
    <ResumeNav />
    <div className="builder">
      <ResumeSidebar />
      <Outlet />

    </div>
    </>
  )
}

