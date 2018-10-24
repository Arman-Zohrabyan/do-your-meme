import Home from './components/Home';
import Vk from './components/Vk';
import { fetchPopularRepos } from './components/api';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/vkontakte',
    exact: true,
    component: Vk,
  }
  // {
  //   path: '/popular/:id',
  //   component: Grid,
  //   fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  // },
];

export default routes;
