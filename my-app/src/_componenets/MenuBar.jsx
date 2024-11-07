export default function MenuBar({currentTab, handleTab}){
  return (
    <div className="menu-bar flex justify-center items-center h-">
      <div className="button-container w-3/4 bg-slate-500 flex items-center">
        <button className="today">오늘의 미션</button>
        <button className="today"></button>
        <button className="today">오늘의 미션</button>
      </div>
    </div>
  )
}