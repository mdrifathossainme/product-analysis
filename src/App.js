
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home'
import DeshBoard  from './component/DashBoard/DashBoard'
import Blogs from './component/Blogs/Blogs'
import About from './component/About/About'
import Review from './component/Review/Review'
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';

function App() {
  return (
   <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/deshboard" element={<DeshBoard></DeshBoard>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/review" element={<Review></Review>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes></>
  );
}

export default App;
