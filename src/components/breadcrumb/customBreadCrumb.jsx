import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

// Define a mapping for pathnames to breadcrumb names

const BreadcrumbComponent = ({ name }) => {
  const breadcrumbNameMap = {
    '/': 'Главная',
    '/hotels': 'Отели Ташкента',
    '/hotels/hotel': name,
  };

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  // Generate breadcrumb items
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSnippets.length - 1;
    return (
      <Breadcrumb.Item key={url}>
        {isLast ? (
          <span className="text-gray-500">{breadcrumbNameMap[url]}</span>
        ) : (
          <Link to={url} style={{ color: 'black' }}>
            {breadcrumbNameMap[url]}
          </Link>
        )}
      </Breadcrumb.Item>
    );
  });

  // Add the root breadcrumb item
  breadcrumbItems.unshift(
    <Breadcrumb.Item key="/">
      {location.pathname === '/' ? (
        <span className="text-gray-500">{breadcrumbNameMap['/']}</span>
      ) : (
        <Link to="/" style={{ color: 'black' }}>
          {breadcrumbNameMap['/']}
        </Link>
      )}
    </Breadcrumb.Item>
  );

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default BreadcrumbComponent;
