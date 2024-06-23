import { AuthProvider } from '../context/Auth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Product } from '../pages/Product/Product';
import { Notification } from '../pages/Notification/Notification'
import { MyProfile } from '../pages/MyProfile/MyProfile';
import { Orders } from '../pages/Orders/Orders';
import { Favorite } from '../pages/Favorite/Favorite';
import { Cupons } from '../pages/Cupons/Cupons';
import { Address } from '../pages/Address/Address';

const Rotas = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cupons" element={<Cupons />} />
          <Route path="/adress" element={<Address />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Rotas