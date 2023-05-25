import { useState } from 'react';
import Joi from 'joi';
import '../assets/login.css';
import { useAuth } from '../utils/Auth';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({email: '', password: ''});
  const [error, setError] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  const schema = Joi.object({
    password: Joi.string()
      .min(5)
      .max(15)
      .label('Password Field')
      .regex(/^(?=.*[A-Z])(?=.*\d).{5,15}$/)
      .messages({'string.pattern.base': '"Password" Field must have number, Uppercase letter'}),
    email: Joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  })
  const errorChange = (target) => {
    const { name, value } = target; 
    const obj = {[name]: value};
    const subSchema =  {[name]: schema[name]}
    const { error } = schema.validate(obj, subSchema);
    return error ? error.details[0] : null;
  }
  const handleChange = ({target}) => {
    const {name, value} = target;
    setUser({...user, [name]: value})
    let error = errorChange(target);
    if (error) {
      const {message, path} = error;
      return setError({[path[0]]: message});
    } else {
        setError(null);
    }
  }
  const errorSubmit = () => {
    const errors = {};
    const { error } = schema.validate(user, { abortEarly: false });
    if(error) {
      for (let index = 0; index < error.details.length; index++) {
        errors[error.details[index].path[0]] = error.details[index].message;
      }
      return errors;
    } 
    return null;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = errorSubmit();
    if (!error) {
      auth.login(user);
      return navigate(redirectPath, { replace: true });
    }
    setError(error);
  }
  return (
    <>
    <nav> Resume Builder </nav>
    <div className='form-container'>
        <div className='msg'>User Login</div>
        <form noValidate onSubmit={handleSubmit} action="">
          <div className='input-box'>
            <label htmlFor="">Email: </label>
            <input 
              type="email" 
              name="email" 
              onChange={handleChange}
            />
          </div>
          {error && <div className='error-msg'>{error.email}</div>}
          <div className='input-box'>
            <label htmlFor="">Password: </label>
            <input 
              type="password" 
              name="password" 
              onChange={handleChange}
            />
          </div>
          {error && <div className='error-msg'>{error.password}</div>}
          <label htmlFor="">
            <input 
              type="checkbox" 
              name="checkbox"
            />
              Remember Me
            </label>
          <div className='submit-box'>
            <div className="forgot-password">Forgot Password?</div>
            <button>Submit</button>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login;
