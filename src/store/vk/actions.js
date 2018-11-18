export const change = (value, section, key) => ({
  type: 'VK_CHANGE_DATA',
  section,
  value,
  key
});

export const changeImage = (type, key, img) => dispatch => {
  if (type === 'temp') {
    dispatch({
      type: 'VK_CHANGE_IMAGE',
      src: img,
      key
    });
  } else {
    const reader = new FileReader();
    reader.readAsDataURL(img.target.files[0]);
    reader.onload = function () {
      dispatch({
        type: 'VK_CHANGE_IMAGE',
        src: reader.result,
        key
      });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
};

export const addContent = groupName => (dispatch, getState) => {
  const { vk } = getState();
  const { widgetContent } = vk;
  let section, name1, name2;

  if (groupName === 'separator') {
    section = 'content';
    name1 = 'separatorText';

    const group = { [groupName]: vk[section][name1] };
    widgetContent.push(group);

    dispatch(_setContent(widgetContent));
    dispatch(_clearInputValue(section, name1));
  } else {
    section = groupName;
    name1 = 'msgTime';
    name2 = 'message';

    const group = {
      [groupName]: [
        {
          [name1]: vk[section][name1],
          [name2]: vk[section][name2]
        }
      ]
    };
    widgetContent.push(group);

    dispatch(_setContent(widgetContent));
    dispatch(_clearInputValue(section, name1));
    dispatch(_clearInputValue(section, name2));
  }

};

const _clearInputValue = (section, name) => ({
  type: 'VK_CLEAR_INPUT',
  section,
  name
});

const _setContent = widgetContent => ({
  type: 'VK_CHANGE_WIDGET_CONTENT',
  widgetContent
});
