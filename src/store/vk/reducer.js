import constants from '../../../config/constants';


const initialState = {
  widgetContent: [
    {
      separator: '6 ноября'
    },
    {
      current: [{
        msgTime: '14:00',
        message: 'Привет.'
      }]
    },
    {
      companion: [{
        msgTime: '14:20',
        message: 'Здравствуй.'
      }]
    },
    {
      current: [{
        msgTime: '14:21',
        message: 'Как дела?'
      }]
    }
  ],
  components: {
    header: true,
    footer: true
  },
  header: {
    time: 'был в сети только что',
    mobile: false
  },
  content: {
    height: 250,
    separatorText: ''
  },
  companion: {
    name: 'Собеседник Беседник',
    image: constants.defaultImage,
    msgTime: '',
    message: ''
  },
  current: {
    name: 'Текущий пользователь',
    image: constants.defaultImage,
    msgTime: '',
    message: ''
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
