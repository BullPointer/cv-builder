/* eslint-disable react/prop-types */

export default function RightBox({ rmResume, data }) {
  const { 
    personal, 
    career, 
    experience, 
    project,
    education,
    certifications
    } = data;

    return (
    <div className="right-side">
        <div className="top">
            <div className="name">{personal.firstname} {personal.lastname}</div>
            <div 
            style={{fontWeight: 'bold'}} 
            onClick={rmResume} 
            className="close">X</div>
        </div>
        <div className="work-title">{personal.title}</div>
        <div className="obj">{career}</div>
        {Object.keys(experience).length > 0 && <div className="sub-box">
            <div className="title">Experience</div>
            <div className="sub-title">
                <div className="title-info">
                    <div style={{fontSize: '11px'}}>{experience.title}</div>
                    <div>{experience.company}</div>
                    <div>{experience.country}</div>
                </div>
                <div className="title-info">{experience.date}</div>
            </div>
            <hr />
            <div className="msg">{experience.details}</div>
        </div>}
        {Object.keys(project).length > 0 && <div className="sub-box">
            <div className="title">Projects</div>
            <div className="sub-title">
                <div className="title-info">
                    <div style={{fontSize: '11px'}}>{project.projectTitle}</div>
                </div>
                <div className="title-info">{project.date}</div>
            </div>
            <hr />
            <div className="msg">{project.details}</div>
        </div>}
        {Object.keys(education).length > 0 && <div className="sub-box">
            <div className="title">Education</div>
            <hr />
            <div className="sub-title">
                <div className="msg">{education.schoolName}</div>
                <div className="msg">{education.schoolLocation}</div>
            </div>
            <div className="sub-title">
                <div className="msg">{education.degree}</div>
                <div className="msg">{education.date}</div>
            </div>
        </div>}
        {certifications.length > 0 && <div className="sub-box">
            <div className="title">Certifications</div>
            <hr />
            {
                certifications.map((item, index)=> {
                     return (
                        <div key={index} 
                        className="msg">{item.value}
                        </div>
                    )
                })
            }
        </div>}
    </div>
  )
}
