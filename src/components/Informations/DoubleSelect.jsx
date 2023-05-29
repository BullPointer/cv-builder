/* eslint-disable react/prop-types */


export default function DoubleSelect({ labelOne, labelTwo }) {
  return (
    <div className="double-name">
      <div className="name-box">
          <label htmlFor="">{labelOne}</label>
          <input type="" name="firstname" />
      </div>
      <div className="name-box">
          <label htmlFor="">{labelTwo}</label>
          <input type="text" name="lastname" />
      </div>
    </div>
  )
}
/* eslint-disable react/prop-types */

