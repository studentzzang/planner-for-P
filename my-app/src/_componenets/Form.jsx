import {useStaet} from 'react';

export default function Form({setShowForm, setValue, missions, createMission}){

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
    <div className="content-container flex flex-col absolute inset-0 bg-[rgba(255,255,255,0.5)] backdrop-blur-sm">
      <div className="form-container">
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

      <div className="other">

        <div className="input-container">
            
          <label>어떤 미션을 위한 미션인가요?</label>
          <input list="missions" name="missions"/>
          <datalist id="missions">
            {missions.map((data) => (
              <div key={data.id}>
                <option value={missionUnit(data.dateUnit)+data.title}></option>
              </div>
            ))} 
          </datalist>
        </div>
        
      </div>
      
    </div>
  )
}