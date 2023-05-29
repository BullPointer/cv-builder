/* eslint-disable react/prop-types */
import { useAuth } from "../../utils/Auth"
import { useResume } from "../../utils/UserResume";
import LeftBox from "./resume-folder/Left-box";
import RightBox from "./resume-folder/Right-box";


export default function Resume() {
  const getImg = useAuth();
  const {data, close, rmResume } = useResume();
  const showActive = () => {
    return close ? 'isActive' : '';
  }
 
  return (
    <div className={`container ${showActive()}`}>
        <div className="box">
          <LeftBox 
            getImg={getImg} 
            data={data}
          />
          <RightBox 
            data={data}
            rmResume={rmResume}
          />
        </div>
    </div>
  )
}
