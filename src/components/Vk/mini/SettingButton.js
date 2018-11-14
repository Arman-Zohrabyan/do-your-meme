import React from 'react';
import classNames from 'classnames';

function SettingButton({ content, full, handleClick, distance, ligth }) {
  const wrapper = classNames({
    'vk_form__setting-button': true,
    'vk_form__setting-button-full': full,
    'vk_form__setting-button-distance': distance,
    'vk_form__setting-button-ligth': ligth
  });

  return (
    <button className={wrapper} onClick={handleClick}>
      {content}
    </button>
  );
}

export default SettingButton;
