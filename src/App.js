import './App.css';
import { Routes, Route } from "react-router-dom";
import { MainScreen } from './screen';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainScreen />} />
    </Routes>

  );
}

export default App;
