import constants from '../../../config/constants';


const initialState = {
  components: {
    header: true,
    footer: true
  },
  header: {
    time: 'был в сети только что',
    mobile: false
  },
  content: {
    height: 100
  },
  companion: {
    name: 'Собеседник Беседник',
    image: constants.defaultImage
  },
  current: {
    name: 'Текущий пользователь',
    image: constants.defaultImage
  },
  temp: {
    companionImg: '',
    currentImg: ''
  }
};

const vk = (state = initialState, action) => {
  let _state;

  switch (action.type) {
    case 'VK_CHANGE_DATA': {
      const { section, key, value } = action;
      _state = { ...state };
      _state[section][key] = value;
      return _state;
    }
    case 'VK_CHANGE_IMAGE': {
      const { src, key } = action;
      _state = { ...state };
      _state[key].image = src;
      return _state;
    }
    default: {
      return state;
    }
  }
};

export default vk;
