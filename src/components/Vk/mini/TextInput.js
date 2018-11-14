import React from 'react';
import classNames from 'classnames';

function TextInput({ label, value, onChange, inline, table, type = 'text', required = 'false', placeholder = '' }) {
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
          required={required}
          type={type}
          className='vk_form__input'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        </label>
    </div>
  );
}

export default TextInput;
