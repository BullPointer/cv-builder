/* eslint-disable react/prop-types */


export default function SingleForm({ 
  label, 
  type, 
  name,
  value, 
  onChange,
  error
}) {
  return (
    <div className="single-name">
        <div className="single-box">
            <label htmlFor="">{label}</label>
            <input 
            type={type} 
            name={name} 
            value={value}
            onChange={onChange}
            />
            {error && <div className="error">{error[name]}</div>}
        </div>
    </div>
  )
}
