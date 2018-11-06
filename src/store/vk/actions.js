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
