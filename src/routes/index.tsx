import { AuthProvider } from "../context/Auth";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Product } from "../pages/Product/Product";
import { Notification } from "../pages/Notification/Notification";
import { MyProfile } from "../pages/MyProfile/MyProfile";
import { Orders } from "../pages/Orders/Orders";
import { Favorite } from "../pages/Favorite/Favorite";
import { Cupons } from "../pages/Cupons/Cupons";
import { Address } from "../pages/Address/Address";
import { ProfileCompany } from "../pages/ProfileCompany/ProfileCompany";
import { Bag } from "../pages/Bag/Bag";
import { TypeDelivery } from "../pages/TypeDelivery/TypeDelivery";
import { NewAdress } from "../pages/NewAddress/NewAdress";
import { StopWatch } from "../pages/Stopwatch/StopWatch";
import { TypePayment } from "../pages/TypePayment/TypePayment";

const Rotas = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="myprofile">
            <Route index element={<MyProfile />} />
            <Route path="notification" element={<Notification />} />
            <Route path="cupons" element={<Cupons />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="adress" element={<Address />} />
            <Route path="adress/:mode" element={<NewAdress />} />
          </Route>
          {/* <Route path="/editAdress/:mode" element={<NewAdress />} /> */}
          <Route path="/bag" element={<Bag />} />
          <Route path="/payment">
            <Route index element={<TypePayment />} />
            <Route path="pix" element={<StopWatch />} />
          </Route>
          <Route path="/typeDelivery" element={<TypeDelivery />} />
          <Route path="/profileCompany" element={<ProfileCompany />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default Rotas;
