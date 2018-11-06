import React from 'react';

function UserImage({ imgUrl }) {
  return (
    <img
      className='vk-widget_header__mini-img'
      src={imgUrl}
    />
  );
}

export default UserImage;
