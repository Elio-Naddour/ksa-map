import './App.css';
import SaudiMapButtons from './components/mapSvg';
import logos from './images/logos.png'
import sawt from './images/sawt.png'

function App() {
  return (
      <div className='map-container'>
        <div className='header'>
          <img src={logos}/>
          <img className='sawt' src={sawt}/>
          <text>إسمع صوت الوطن</text>
        </div>
        <SaudiMapButtons />
      </div>
  );
}

export default App;
