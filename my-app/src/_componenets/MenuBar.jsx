  export default function MenuBar({currentTab, handleTab}){

    const btnStyle = "block p-3 my-12 text-4xl text-teal-800 transition-all duration-300 ease-in-out";
    const currentBtnStyle = "mx-5 text-4xl text-teal-500 font-semibold transition-all duration-300 ease-in-out";

    return (
      <div className="menu-bar flex justify-center items-center">
        <div className="button-container w-5/6 my-1">

          <button className={`${btnStyle} ${currentTab === 0 ? currentBtnStyle : ''}`} onClick={()=>handleTab(0)}>오늘의 미션</button>
          <button className={`${btnStyle} ${currentTab === 1 ? currentBtnStyle : ''}`} onClick={()=>handleTab(1)}>주간 미션</button>
          <button className={`${btnStyle} ${currentTab === 2 ? currentBtnStyle : ''}`} onClick={()=>handleTab(2)}>월간 미션</button>
          <button className={`${btnStyle} ${currentTab === 3 ? currentBtnStyle : ''}`} onClick={()=>handleTab(3)}>연간 미션</button>
        </div>

        <div className="other-container">

        </div>
      </div>
    )
  }