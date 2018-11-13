import React from 'react';
import classNames from 'classnames';

function UserImage({ src, size = 'small' }) {
  const imageClasses = classNames({
    'vk-widget__user-img': true,
    [`vk-widget__user-img-${size}`]: true
  });

  return (
    <img
      className={imageClasses}
      src={src}
    />
  );
}

export default UserImage;
