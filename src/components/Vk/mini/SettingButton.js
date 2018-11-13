import React from 'react';
import classNames from 'classnames';

function SettingButton({ content, full, handleClick }) {
  const wrapper = classNames({
    'vk_form__setting-button': true,
    'vk_form__setting-button-full': !!full
  });

  return (
    <button className={wrapper} onClick={handleClick}>
      {content}
    </button>
  );
}

export default SettingButton;
