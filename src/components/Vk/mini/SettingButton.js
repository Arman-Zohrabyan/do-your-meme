import React from 'react';
import classNames from 'classnames';

function SettingButton({ content, full }) {
  const wrapper = classNames({
    'vk_form__setting-button': true,
    'vk_form__setting-button-full': !!full
  });

  return (
    <button className={wrapper}>
      {content}
    </button>
  );
}

export default SettingButton;
