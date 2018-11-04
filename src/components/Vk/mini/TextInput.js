import React from 'react';
import classNames from 'classnames';

function TextInput({ label, value, onChange, inline }) {
  const wrapper = classNames({
    'vk_text': true,
    'vk_text__inline': inline
  });

  return (
    <div className={wrapper}>
      <label className='vk_text__label'>
        {`${label}: `}
        <input
          type='text'
          className='vk_text__input'
          value={value}
          onChange={onChange}
        />
        </label>
    </div>
  );
}

export default TextInput;
