import '../assets/resumeSidebar.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export function ResumeSidebar() {

    return(
        <div className='sidebar'>
            <Link to='personal' className='bar'>
                <Icon className="logo" icon="fxemoji:contact" />
                <div className='txt'>Personal Info</div>
            </Link>
            <Link to='career' className='bar'>
                <Icon className="logo" icon="ant-design:flag-twotone" />
                <div className='txt'>Career Objective</div>
            </Link>
            <Link to='experience' className='bar'>
                <Icon className="logo" icon="ps:work-case" />
                <div className='txt'>Experience</div>
            </Link>
            <Link to='project' className='bar'>
                <Icon className="logo" icon="fluent-mdl2:new-team-project" />
                <div className='txt'>Project</div>
            </Link>
            <Link to='certification' className='bar'>
                <Icon className="logo" icon="bxs:certification" />
                <div className='txt'>Certifications</div>
            </Link>
            <Link to='education' className='bar'>
                <Icon className="logo" icon="fluent-mdl2:education" />
                <div className='txt'>Education</div>
            </Link>
        </div>
    ) 
} 