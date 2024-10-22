import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Womenstore from './darshan/pages/Womenstore';
import Home from './Vivek/Component/Home/Home'
import Electronics from './Parth/Component/Electronics/Electronics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beauty from './Parth/Component/Beauty/Beauty';
import Womenfilter from './darshan/pages/Womenfilter';
import ContactUs from './Parth/Component/ContactUs/ContactUs';
import AboutUs from './Parth/Component/ContactUs/AboutUs';
import Luggage from './Parth/Component/Luggage/Luggage';
import Sports from './Parth/Component/Sports/Sports';
import User from './Vivek/Component/User/User';
import UserProfile from './Vivek/Component/User/UserProfile'
import MyOrder from './Vivek/Component/User/MyOrder';
import UserFaq from './Vivek/Component/User/UserFaq';
import WomenDetails from './darshan/pages/WomenDetails';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          {/* home page */}
          <Route path='/home' element={<Home />} />

          {/* electronics */}
          <Route path='/electronics' element={<Electronics />} />

          {/* beauty */}
          <Route path="/beauty" element={<Beauty />} />

          {/* women */}
          <Route path='/women' element={<Womenstore />} />
          <Route path='/womenstore' element={<Womenfilter />} />
          <Route path='/womendetails' element={<WomenDetails />} />

          {/* about us */}
          <Route path="/about" element={<AboutUs />} />

          {/*contact us  */}
          <Route path="/contact" element={<ContactUs />} />

          {/* luggage */}
          <Route path="/luggage" element={<Luggage />} />

          {/* sport */}
          <Route path="/sport" element={<Sports />} />

          {/* user */}
          <Route path="/user" element={<User />}>
            <Route path='profile' element={<UserProfile />} />
            <Route path='myorder' element={<MyOrder />} />
            <Route path='faq' element={<UserFaq />} />
          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;