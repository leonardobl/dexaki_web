import { AuthProvider } from '../context/Auth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Product } from '../pages/Product/Product';
import { Notification } from '../pages/Notification/Notification'
import { MyProfile } from '../pages/MyProfile/MyProfile';

const Rotas = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Rotas