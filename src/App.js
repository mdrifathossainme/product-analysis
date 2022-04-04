
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home'

function App() {
  return (

    <Routes>
      <Routes path="/" element={<Home></Home>}></Routes>
    </Routes>
  );
}

export default App;
