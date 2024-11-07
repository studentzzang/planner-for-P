import {useState} from 'react'
import Menu from './_componenets/Menu';
import Content from './_componenets/Content';
function App() {

  // 0 : today / 1 : weekly / 2 : monthly / 3 : yearly
  const [currentTab, setTab] = useState(0); 

  const handleTab = (num) => {

    setTab(num);
  }

  return (
    <>
      <Menu currentTab={currentTab} handleTab={handleTab}/>
      <Content currentTab={currentTab}/>
    </>
  )
}

export default App;
