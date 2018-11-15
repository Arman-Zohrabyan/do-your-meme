import React from 'react';
import path from 'path';
// import Loadable from 'react-loadable';

import VkContainer from './containers/Vk/VkContainer';
import Home from './components/Home';
import Fb from './components/Fb';
// import Language from './classes/Language';


// const LoadableVkContainer = Loadable({
//   loader: () => import('./containers/Vk/VkContainer'),
//   loading: <div>Загрузка</div>,
//   serverSideRequirePath: path.join(__dirname, './containers/Vk/VkContainer')
// });


const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    config: {
      title: 'titles.home',
    },
  },
  {
    path: '/vkontakte',
    exact: true,
    component: VkContainer,
    config: {
      title: 'titles.vk',
    },
  },
  {
    path: '/facebook',
    exact: true,
    component: Fb,
    config: {
      title: 'titles.fb',
    },
  },
  // {
  //   path: '/popular/:id',
  //   component: Grid,
  //   fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  // },
];

export default routes;
