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

const App = () => {
  const auth = {
    token: true,
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes auth={auth} />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Hotels />} path="/hotels" />
            <Route element={<HotelSingle />} path="/hotels/hotel" />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<Login />} path="/login" />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
