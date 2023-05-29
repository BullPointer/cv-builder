/* eslint-disable react/prop-types */
import '../assets/resumeNav.css';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../utils/UserResume';

export function ResumeNav() {
    const auth = useAuth();
    const { showResume, toggleSidebar } = useResume();
    const [windowSize, setWindowSize] = useState(screen.width);
    const [hover, setHover] = useState(false);
    const showActive = () => hover ? 'active' : '';
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    } 
    const toggleName = () => {
        return windowSize <= 700 ? 'activeToggle' : '';
    }
    const handleSidebar = () => {
        toggleSidebar();
    }


    useEffect(() => {
        const handleWindowResize = () => {
        setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return(
        <div className='build-nav'>
            
            <div className="logo-txt">Resume Builder</div>
            <div style={{display: 'flex'}}>
                <div 
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    className="profile"
                > 
                    <div className='img-box'>
                    {
                    !auth.previews ?
                    <Icon className="profile-img" icon="gg:profile" />
                    : <img src={auth.previews} alt=""  />
                    }
                    </div>
                    <Icon className="profile-arrow" icon="mdi:arrow-down-drop" />
                    <div 
                        className={`profile-dropdown ${showActive()}`}
                    >
                        <div 
                            onClick={showResume}
                            className='profile-select'
                        >VIEW RESUME</div>
                        <div 
                            onClick={handleLogout} 
                            className='profile-select'
                        >LOGOUT</div>
                    </div>

                </div>
                <Icon
                onClick={handleSidebar}
                className={`toggle ${toggleName()}`}
                icon="fe:bar" />
            </div>
        </div>
    ) 
} 