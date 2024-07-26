import { Link } from 'react-router-dom';
import BreadcrumbComponent from '../../components/breadcrumb/customBreadCrumb';

const Hotels = () => {
  return (
    <div>
      hotels
      <BreadcrumbComponent />
      <Link to="/hotels/hotel">hotel</Link>
    </div>
  );
};

export default Hotels;
