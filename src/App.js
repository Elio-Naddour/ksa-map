import './App.css';
import SaudiMapButtons from './components/mapSvg';
import logos from './images/logos.png'
function App() {
  return (
      <div className='map-container'>
        <div className='header'>
          <img src={logos}/>
          <text>إسمع صوت الوطن</text>
        </div>
        <SaudiMapButtons />
      </div>
  );
}

export default App;
