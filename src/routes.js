import VkContainer from './containers/Vk/VkContainer';
import Home from './components/Home';
import Fb from './components/Fb';
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
