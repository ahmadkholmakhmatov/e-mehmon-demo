import { Link } from 'react-router-dom';
import BreadcrumbComponent from '../../components/breadcrumb/customBreadCrumb';
const Hotels = () => {
  return (
    <div>
      hotels
      <BreadcrumbComponent />
      <Link className="block" to="/hotels/hotel">
        hotel
      </Link>
      <h1>Product Page</h1>
      {/* Other product details */}
    </div>
  );
};

export default Hotels;
