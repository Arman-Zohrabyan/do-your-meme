const initialState = {
  header: {
    companion: 'Тестовое имя',
    time: 'был в сети только что',
    mobile: true,
    userImage: null
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
    default: {
      return state;
    }
  }
};

export default vk;