import './App.css';
import {useState} from 'react'
import Tabs from './Components/Tabs';


function App() {
  
  const tabsValues = [
    {name: 'Tab 1', content: 'Tab 1 content is showing here.'},
    {name: 'Tab 2', content: 'Tab 2 content is showing here.'},
    {name: 'Tab 3', content: 'Tab 3 content is showing here.'}
  ]


  const [tabs, setTabs] = useState(tabsValues)
  
  
  return (
    <div className="App">
      <Tabs tabs={tabs}/>  
    </div>
  );
}

export default App;