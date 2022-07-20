import { Route, Routes } from 'react-router-dom';

import Home from 'page/Home';
import Login from 'page/Login';
import LoginPass from 'page/LoginPass';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginpass" element={<LoginPass />} />
      </Routes>
    </div>
  );
}

export default App;
