/* eslint-disable react/prop-types */


export default function DoubleForm({  
  labelOne, 
  labelTwo, 
  type, 
  nameOne,
  nameTwo,
  value1, 
  value2,
  onChange,
  error
}) {

  return (
    <div className="double-name">
        <div className="name-box">
            <label htmlFor="">{labelOne}</label>
            <input 
              type={type} 
              name={nameOne}
              value={value1}
              onChange={onChange}
            />
            {error && <div className="error">{error[nameOne]}</div>}
        </div> 

        <div className="name-box">
            <label htmlFor="">{labelTwo}</label>
            <input 
              type={type} 
              name={nameTwo}
              value={value2}
              onChange={onChange}
            />
            {error && <div className="error">{error[nameTwo]}</div>}
        </div>

    </div>
  )
}
