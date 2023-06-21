import { Routes, Route} from "react-router-dom";

import HomePage from './pages/HomePage';
import ResultPageBU from './pages/ResultPageBU';
import ResultPageMIT from './pages/ResultPageMIT';

import './css/App.css';


function App() {
  return ( 
    <div className="App">
      <Routes>
          <Route index path="/" element={<HomePage />}/>
          <Route path="resultpagebu" element={<ResultPageBU />} />
          <Route path="resultpagemit" element={<ResultPageMIT />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
