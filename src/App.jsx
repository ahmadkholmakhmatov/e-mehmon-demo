import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import PrivateRoutes from './utils/PrivateRoutes';
import Home from './pages/home/Home';
import HotelSingle from './pages/hotel-single/HotelSingle';
import Login from './pages/login/Login';
import NotFound from './pages/not-found/NotFound';
import Hotels from './pages/hotels/Hotels';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/hotel" element={<HotelSingle />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
