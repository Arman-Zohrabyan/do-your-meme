import React from 'react';
import constants from '../../../../config/constants';

function UserImage({ imgUrl = constants.defaultImage }) {
  imgUrl = imgUrl || constants.defaultImage;

  return (
    <img
      className='vk-widget_header__mini-img'
      src={imgUrl}
    />
  );
}

export default UserImage;
