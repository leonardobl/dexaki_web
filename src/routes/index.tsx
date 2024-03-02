import { AuthProvider } from '../context/Auth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';

const Rotas = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Rotas