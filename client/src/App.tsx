import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
      <section id="center">
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
