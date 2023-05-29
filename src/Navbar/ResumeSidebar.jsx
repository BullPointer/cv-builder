import '../assets/resumeSidebar.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useResume } from '../utils/UserResume';


export function ResumeSidebar() {
    const { sidebar, toggleSidebar } = useResume();
    const side = !sidebar ? '' : 'active-sidebar';

    const handleBar = () => {
        if (screen.width <=700 && side) {
            toggleSidebar();
        }
    }
    return(
        <div className={`sidebar ${side}`}>
            <Link onClick={handleBar} to='personal' className='bar'>
                <Icon className="logo" icon="fxemoji:contact" />
                <div className='txt'>Personal Info</div>
            </Link>
            <Link onClick={handleBar} to='career' className='bar'>
                <Icon className="logo" icon="ant-design:flag-twotone" />
                <div className='txt'>Career Objective</div>
            </Link>
            <Link onClick={handleBar} to='experience' className='bar'>
                <Icon className="logo" icon="ps:work-case" />
                <div className='txt'>Experience</div>
            </Link>
            <Link onClick={handleBar} to='project' className='bar'>
                <Icon className="logo" icon="fluent-mdl2:new-team-project" />
                <div className='txt'>Project</div>
            </Link>
            <Link onClick={handleBar} to='certification' className='bar'>
                <Icon className="logo" icon="bxs:certification" />
                <div className='txt'>Certifications</div>
            </Link>
            <Link onClick={handleBar} to='education' className='bar'>
                <Icon className="logo" icon="fluent-mdl2:education" />
                <div className='txt'>Education</div>
            </Link>
        </div>
    ) 
} 