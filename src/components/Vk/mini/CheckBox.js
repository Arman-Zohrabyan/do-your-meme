import React from 'react';
import classNames from 'classnames';

function CheckBox({ label, checked, onChange, inline, table }) {
  const wrapper = classNames({
    'vk_form': true,
    'vk_form__inline': inline,
    'vk_form__table': table
  });

  const image = checked ? 'checked' : 'check';

  return (
    <div className={wrapper}>
      <label className='vk_form__label'>
        <span className='vk_form__label-text'>
          {`${label}: `}
        </span>
        <div className='vk_form__checkbox-wrapper'>
          <img
            src={`./assets/images/${image}.svg`}
            className='vk_form__checkbox'
          />
          <input
            className='hide-element'
            type='checkbox'
            checked={checked}
            onChange={onChange}
          />
        </div>
      </label>
    </div>
  );
}

export default CheckBox;
