/* eslint-disable react/prop-types */

export default function LeftBox({ getImg, data }) {
  const { personal } = data;

  return (
    <div className="left-side">
      <div className="img-box">
        <img src={getImg.previews} alt=""  />
      </div>
      <div className="personal-box">
        <div className="msg-title">Personal Info</div>
        <div className="msg">{personal.email}</div>
        <div className="msg">
          {personal.state} {personal.city} {personal.zipCode} {personal.country}
        </div>
        <div className="msg msg-national">
          <div>Nationality</div>
          <div>{personal.country}</div>
        </div>
      </div>
    </div>
  )
}
