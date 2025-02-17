import React from 'react';
import Layout from '../components/Layout';
import IndexPage from '../pages/IndexPage';
import AboutPage from '../pages/AboutPage';
import RecipesSearch from '../pages/RecipesSearch';

// 導入其他頁面...

const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'recipessearch',
        element: <RecipesSearch />,
      },
      // 添加其他路由...
    ],
  },
];

export default routesConfig;