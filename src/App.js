import logo from './logo.svg';
import './App.css';
import Navigbar from './components/Navigbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Addb from './components/Addb';

function App() {
  return (
    <div className="App">
      <Navigbar/>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Addb/>}/>
      </Routes>
    </div>
  );
}

export default App;
