import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styles from './customBreadcrumb.module.css';

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
          <span className="font-onest font-medium text-mainGrey text-[15px]">
            {breadcrumbNameMap[url]}
          </span>
        ) : (
          <Link
            to={url}
            className=" font-onest esm:text-[15px]"
            style={{ color: '#232E40', fontWeight: 500, padding: 0 }}
          >
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
        <span className="font-onest font-medium text-mainGrey text-[15px]">
          {breadcrumbNameMap['/']}
        </span>
      ) : (
        <Link
          to="/"
          className="font-onest esm:text-[15px]"
          style={{ color: '#232E40', fontWeight: 500, padding: 0 }}
        >
          {breadcrumbNameMap['/']}
        </Link>
      )}
    </Breadcrumb.Item>
  );

  return (
    <div className={styles.customBreadcrumb}>
      <Breadcrumb
        separator={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66602 12L9.95891 8.70711C10.2922 8.37377 10.4589 8.20711 10.4589 8C10.4589 7.79289 10.2922 7.62623 9.95891 7.29289L6.66602 4"
              stroke="#B7BFD5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
