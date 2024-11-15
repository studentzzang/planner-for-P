
import {useState} from 'react';
import Form from './Form';

export default function Content ({currentTab}){

  const [missions, setMission] = useState([]); //새 미션 state
  const [relevantMission, setRelevant] = useState([]); // 새 미션 연관된 미션
  const [isShowForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  let themeColor = "";

  const createMission = (e) => {

    if (value.trim() === ""){ //공백 방지
      e.preventDefault();

      return;
    }

    e.preventDefault();

    let currentTime = new Date();

    const newMissionData = {

      id : Date.now(),
      date : [currentTime.getFullYear(), currentTime.getMonth()+1, currentTime.getDay(), currentTime.getHours()],
      title : value,
      dateUnit : {currentTab}, //= currentTab num
      relevantMissions : relevantMission, //관련된 다른 단위 미션데이터
      completed : false,

    }

    //다른 데이터들 초기화
    setMission(prev => [...prev, newMissionData]);

    setRelevant([]);

    setValue("");
  }

  let currentTabTitle = "";
  let addIconSrc = "data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDJjNS41MTggMCA5Ljk5OCA0LjQ4IDkuOTk4IDkuOTk4IDAgNS41MTctNC40OCA5Ljk5Ny05Ljk5OCA5Ljk5Ny01LjUxNyAwLTkuOTk3LTQuNDgtOS45OTctOS45OTcgMC01LjUxOCA0LjQ4LTkuOTk4IDkuOTk3LTkuOTk4em0wIDEuNWMtNC42OSAwLTguNDk3IDMuODA4LTguNDk3IDguNDk4czMuODA3IDguNDk3IDguNDk3IDguNDk3IDguNDk4LTMuODA3IDguNDk4LTguNDk3LTMuODA4LTguNDk4LTguNDk4LTguNDk4em0tLjc0NyA3Ljc1aC0zLjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDMuNXYzLjVjMCAuNDE0LjMzNi43NS43NS43NXMuNzUtLjMzNi43NS0uNzV2LTMuNWgzLjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXMtLjMzNi0uNzUtLjc1LS43NWgtMy41di0zLjVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVzLS43NS4zMzYtLjc1Ljc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+";

  switch(currentTab){
    case 0:
      currentTabTitle = "오늘의";

      themeColor = "bg-gradient-to-tr from-lime-200 to-cyan-200";

      break;
    
    case 1:
      currentTabTitle = "주간";

      themeColor = "bg-gradient-to-tr from-indigo-200 to-cyan-200";

      break;

    case 2:
      currentTabTitle = "월간";

      themeColor = "bg-gradient-to-tr from-purple-200 to-sky-200";

      break;

    case 3:
      currentTabTitle = "연간"

      themeColor = "bg-gradient-to-tr from-orange-200 to-pink-200";
      
      break;
  }

  const currentDateInfo = (unit)=>{



    return;
  }

  return (
    <div className = {`${themeColor} flex justify-center items-center w-auto h-screen bg-gradient-to-tr `}>
      <div className="content-container w-5/6 h-5/6">

        <span className="title-container flex items-center w-1/2">
          <span className="text-4xl font-semibold text-slate-700">{`${currentTabTitle} ${" 미션"}`}</span>

          <button className="form-btn"
            onClick={() => setShowForm(true)}>
            <img src={addIconSrc} className="inline w-10 h-10"/>
          </button>

        </span>

        <div className="mission-container w-2/3 h-3/4 my-16">
          {missions.map((data)=> (
            <div key={data.id}  className="flex items-center justify-between w-full px-4 py-6 my-4 bg-white text-slate-600 rounded-full">
              <div className="flex items-center">

                <input
                  className={`done-btn appearance-none bg-white p-3 ml-3 border-emerald-900 rounded-lg outline-neutral-900 outline outline-2
                    checked:${themeColor}`}
                    
                  type="checkbox"
                  onChange={() => setMission(missions => missions.map(m => m.id === data.id ? { ...m, completed: !m.completed } : m))}
                />
                <span className={ `${data.completed ? "line-through" : "None"} text-3xl font-semibold mx-3 animate-show-up-l`}>{data.title}</span>

              </div>
            </div>
          ))}
        </div>
      </div>

      {isShowForm && <Form setShowForm={setShowForm} setValue={setValue} createMission={createMission}/>}

    </div>
  );
};