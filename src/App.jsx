import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { Build } from './components/Build-resume';
import { NotFound } from './components/Not-found';
import { AuthProvider } from './utils/Auth';
import { RequireAuth } from './utils/RequireAuth';
import Personal from './components/Informations/Personal';
import Career from './components/Informations/Career';
import Experience from './components/Informations/Experience';
import Project from './components/Informations/Project';
import Certifications from './components/Informations/Certifications';
import Education from './components/Informations/Education';
import { ResumeProvider } from './utils/UserResume';

function App() {

  return (
    <AuthProvider>
      <ResumeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cv-builder' element={<Home />} />
          <Route path='cv-builder/build-resume' element={
            <RequireAuth>
              <Build />
            </RequireAuth>
          }> 
            <Route index element={<Personal />} />
            <Route path='personal' element={<Personal />}/>
            <Route path='career' element={<Career />}/>
            <Route path='experience' element={<Experience />}/>
            <Route path='project' element={<Project />}/>
            <Route path='certification' element={<Certifications />}/>
            <Route path='education' element={<Education />}/>
          </Route>
          <Route path='cv-builder/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ResumeProvider>
    </AuthProvider>
  )
}

export default App
