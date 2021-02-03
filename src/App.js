import logo from './logo.svg';
import './App.css';
import Notes from './components/notes';

function App() {
  return (
    <div className="h-full bg-gray-50">
      <div className="h-full box md:flex"> 
        <Notes />
      </div>
    </div>
  );
}

export default App;
