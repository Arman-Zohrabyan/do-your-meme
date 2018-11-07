import VkContainer from './containers/Vk/VkContainer';
import Home from './components/Home';
import Fb from './components/Fb';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
    config: {
      title: 'Развлекательный сайт',
    },
  },
  {
    path: '/vkontakte',
    exact: true,
    component: VkContainer,
    config: {
      title: 'Создать переписку Вконтакте',
    },
  },
  {
    path: '/facebook',
    exact: true,
    component: Fb,
    config: {
      title: 'Создать переписку Фейсбук',
    },
  },
  // {
  //   path: '/popular/:id',
  //   component: Grid,
  //   fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  // },
];

export default routes;
