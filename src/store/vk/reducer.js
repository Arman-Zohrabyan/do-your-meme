import constants from '../../../config/constants';


export const initialState = {
  widgetContent: [],
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

const vk = (state = { ...initialState }, action) => {
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
    case 'VK_CHANGE_WIDGET_CONTENT': {
      const { widgetContent } = action;
      _state = { ...state };
      _state.widgetContent = widgetContent;
      return _state;
    }
    case 'VK_CLEAR_INPUT': {
      const { section, name } = action;
      _state = { ...state };
      _state[section][name] = '';
      return _state;
    }
    default: {
      return state;
    }
  }
};

export default vk;
