/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeContext = createContext(null);

export const ResumeProvider = ({ children }) => {
  const navigate = useNavigate();
  const [close, setClose] = useState(true);
  const [warning, setWarning] = useState(false);
  const [sidebar, setSidebar] = useState(false);

    const [data, setData] = useState({
      personal: {},
      career: '',
      experience: {},
      project: {},
      certifications: [],
      education: {},
    });

    const setResume = (name, updatedData) => {
      setData({...data, [name]: updatedData});
    }
    const rmResume = () => {
      setClose(true);
    }
    const showResume = () => {
      if (Object.keys(data.personal).length === 0) {
        navigate('/build-resume/personal');
        setWarning(true);
        return setTimeout(() => setWarning(false), 3000)
      }
      setClose(false);
      setWarning(false);
    }
    const toggleSidebar = () => {
      setSidebar(!sidebar);
    }
    return (
        <ResumeContext.Provider  value={{
          data, 
          setResume,
          close,
          rmResume,
          showResume,
          warning,
          toggleSidebar,
          sidebar
        }}>
            {children}
        </ResumeContext.Provider>
    )

}

export const useResume = () => {
    return useContext(ResumeContext) ;
}
