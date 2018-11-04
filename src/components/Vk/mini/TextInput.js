import React from 'react';
import classNames from 'classnames';

function TextInput({ label, value, onChange, inline, table, type = 'text' }) {
  const wrapper = classNames({
    'vk_form': true,
    'vk_form__inline': inline,
    'vk_form__table': table
  });

  return (
    <div className={wrapper}>
      <label className='vk_form__label'>
        <span className='vk_form__label-text'>
          {`${label}: `}
        </span>
        <input
          type={type}
          className='vk_form__input'
          value={value}
          onChange={onChange}
        />
        </label>
    </div>
  );
}

export default TextInput;
