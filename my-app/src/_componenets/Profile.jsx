import {useState} from 'react';

export default function Profile(){

  
  const _title = ["재빠른 퓨마", "부지런한 새", "느릿한 거북이", "게으른 고양이", "도전하는 다람쥐"];
  const _titleExplain = ["정말 멋져요!", "잘하고 있어요!", "조금 더 힘내요!", "어서 해볼까요?","시작이 반이에요!"];

  const [title, setTitle] = useState(_title[4]);
  const [titleExplain, setTitleExplain] = useState(_titleExplain[4]);
  const userId = "@studentzzang"; //나중에 파베랑 연결

  let userStateNum = 1;

  const handleTitle = () => {
    setTitle(_title[userStateNum]);

    setTitleExplain(_titleExplain[userStateNum]);
  }

  return (
    
    <div className="flex profile-container h-1/5">
      <div className="picture-container aspect-square h-full flex justify-center items-center">
        <img className="profile-pic align-middle h-3/4 object-cover object-center aspect-square rounded-full" src="https://i.ytimg.com/vi/tHRm22e2kyc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAz32Sgxbe1ibtMzN3LaJ9DwjuoKw"></img>

      </div>

      <div className="w-full my-4 flex flex-col items-start justify-between">
        <p className="text-lg text-teal-600">{titleExplain}</p>
        <p className="text-3xl font-bold text-teal-700">{title}</p>
        <p className="text-lg text-teal-600">{userId}</p>
      </div>

    </div>
  
  )
}