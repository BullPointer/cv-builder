import '../assets/resumeNav.css';
import { Icon } from '@iconify/react';


export function ResumeNav() {

    return(
        <div className='build-nav'>
            <div className="logo-txt">Resume Builder</div>
            <div className="profile">
                <Icon className="profile-img" icon="gg:profile" />
                <Icon className="profile-arrow" icon="mdi:arrow-down-drop" />
            </div>
        </div>
    ) 
} 