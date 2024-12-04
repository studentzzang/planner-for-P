import {useState} from 'react';

export default function Form({setShowForm, setValue, missions, createMission}){

  const [associateMissions, setAssociate] = useState([]); 
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const listDesign = "bg-white rounded-xl py-2 flex";

  const handleChange = (e) => { //form에 할일내용 적으면 바뀜
    setValue(e.target.value)
  };

  const missionUnit = (num) => { //관련 미션 단위 리턴

    switch(num) {
      case 0:
        return "오늘";
      case 1:
        return "주간";
      case 2:
        return "월간";
      case 3:
        return "연간";
    }
    return;
  }

  return (
    <div className="content-container flex flex-col items-center justify-center absolute inset-0 bg-[rgba(255,255,255,0.5)] backdrop-blur-sm">
      <div className="form-container w-3/4 ">
        <form className="flex justify-center w-full pt-2" onSubmit={(e) => createMission(e)}>
          <input
            className="w-2/3 px-3 py-2 text-teal-800 border rounded outline-none"
            type="text"
            name="value"
            placeholder="미션이 무엇인가요?"
            onChange={handleChange}
          />

          <button 
            className="form-cancle  bg-white absolute top-3 right-3 ml-3 aspect-square rounded-2xl"
            onClick={() => setShowForm(false)}
          >X</button>

          <button
            className="done-btn bg-white ml-3 p-2"
            type="submit"
          >완료</button>

        </form>
      </div>

      <div className="associate-container flex flex-col w-full items-center">

        <div className="input-container w-1/3">
          <span className="align-middle">어떤 미션을 위한 미션인가요?</span> <br/>
          <div className="lists flex flex-col">
            <button
              className={listDesign}
              onClick={toggleDropdown}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </button>

            {isOpen && (
              <ul>
                {missions.map((data)=>(
                  <li key={data.id} className={listDesign}>{data.title}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}