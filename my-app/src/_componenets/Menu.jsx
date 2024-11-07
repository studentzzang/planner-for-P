import Profile from "./Profile";
import MenuBar from './MenuBar';

export default function Menu({currentTab, handleTab}){
  return (
    <div className="inline float-left menu-container h-screen w-1/4 bg-white">
      <Profile/>
      <MenuBar currentTab={currentTab} handleTab={handleTab}/>
    </div>
  )
}