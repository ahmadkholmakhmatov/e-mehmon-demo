import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import Home from '../src/pages/home/Home';
import HotelSingle from './pages/hotel-single/HotelSingle';
import Login from './pages/login/Login';
import NotFound from './pages/not-found/NotFound';
import Hotels from './pages/hotels/Hotels';
import Profile from './pages/profile/Profile';

const App = () => {
  const auth = {
    token: true,
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes auth={auth} />}>
            <Route element={<Profile />} path="/profile" />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<Hotels />} path="/hotels" />
          <Route element={<HotelSingle auth={auth} />} path="/hotels/hotel" />
          <Route element={<Home auth={auth} />} path="/" exact />
          <Route element={<Login />} path="/login" />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
