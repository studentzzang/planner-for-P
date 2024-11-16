export default function Missions({missions, setMission, bool}){
    return(
        <div>
            {missions.filter((data)=>data.completed === bool).map((data)=> (

                <div key={data.id}  className={`mission flex items-center justify-between w-full px-4 py-6 my-4 bg-white text-slate-600 rounded-full
                ${data.completed !== bool ? "animate-fadeout" : "animate-fadein"}`}>

                    <div className="flex items-center">

                        <input
                        className="done-btn appearance-none bg-white p-3 ml-3 border-emerald-900 rounded-lg outline-neutral-900 outline outline-2
                            checked:bg-slate-50"
                            
                        type="checkbox"
                        onChange={() => setMission(missions => missions.map(m => m.id === data.id ? { ...m, completed: !m.completed } : m))}
                        />

                        <span className={ `${data.completed ? "line-through" : "None"} text-3xl font-semibold mx-3 animate-show-up-l`}>{data.title}</span>

                    </div>
                </div>
                ))}

        </div> 
    )
}
