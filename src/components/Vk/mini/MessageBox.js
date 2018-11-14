import React from 'react';
import Language from '../../../classes/Language';

function MessageBox({ value, label, onChange, required, placeholder = '' }) {
  return (
    <div className='vk_form vk_form__table'>
      <div className='vk_form__label clearfix'>
        <div className='vk_form__section-left'>
          {label}:
        </div>
        <div className='vk_form__section-right'>
          <textarea
            className='vk_form__section-textarea'
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          >
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
