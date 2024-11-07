import {useState} from 'react';

export default function Profile(){

  const _title = {
    "재빠른 퓨마" : "정말 멋져요!",
    "부지런한 새" : "잘하고 있어요!",
    "느릿한 거북이" : "조금 더 힘내요!",
    "게으른 고양이" : "어서 해볼까요?",
    "도전하는 다람쥐" : "시작이 반이에요!",
  }

  const [title, setTitle] = useState("");
  const [titleExplain, setTitleExplain] = useState([]);

  function changeTitle(){

  }

  return (
    
    <div className="profile-container h-1/5 bg-blue-400">
      <div className="picture-container aspect-square h-full bg-purple-400 flex justify-center items-center ">
        <img className="profile-pic align-middle h-3/4 object-cover object-center aspect-square rounded-full" src="https://i.ytimg.com/vi/tHRm22e2kyc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAz32Sgxbe1ibtMzN3LaJ9DwjuoKw"></img>

        <div className="title-explain">{titleExplain}</div>
      </div>
    </div>
  )
}