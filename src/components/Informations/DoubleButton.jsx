/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

export default function DoubleButton({ text }) {
    const navigate = useNavigate();
  return (
    <div className='double-btn'>
        <button onClick={() => navigate(-1)} className='btn'>Back</button>
        <button className='btn'>{text}</button>
    </div>
  )
}
