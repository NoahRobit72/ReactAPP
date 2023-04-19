import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import ResultPageBU from './pages/ResultPageBU';
import ResultPageMIT from './pages/ResultPageMIT';


function App() {

  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/BostonUniversity' element={<ResultPageBU/>} />
          <Route path='/MIT' element={<ResultPageMIT/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
