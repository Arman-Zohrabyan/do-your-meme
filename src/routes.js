import React from 'react';
import path from 'path';
import Loadable from 'react-loadable';

const VkContainer = Loadable({
  loader: () => import('./containers/Vk/VkContainer'),
  modules: ['./containers/Vk/VkContainer'],
  loading: () => null
});

const Home = Loadable({
  loader: () => import('./components/Home'),
  modules: ['./components/Home'],
  loading: () => null
});

const Fb = Loadable({
  loader: () => import('./components/Fb'),
  modules: ['./components/Fb'],
  loading: () => null
});

// import Language from './classes/Language';



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
