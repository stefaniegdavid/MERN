import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Stefanie" lastName="David" age={29} hairColor="Brown"/>
      <PersonCard firstName="David" lastName="Dishoyan" age={27} hairColor="Black"/>
      <PersonCard firstName="Jake" lastName="David" age={28} hairColor="Brown"/>
      <PersonCard firstName="Joanna" lastName="Morales" age={28} hairColor="Brown"/>
    </div>
  );
}

export default App;
