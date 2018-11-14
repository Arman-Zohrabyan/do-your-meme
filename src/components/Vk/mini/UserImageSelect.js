import React from 'react';
import UserImage from './UserImage';
import Language from '../../../classes/Language';

function UserImageSelect({ imgUrl, label, imgTemp, onChangeImage, onChange, tempKey }) {
  return (
    <div className='vk_form vk_form__table'>
      <div className='vk_form__label clearfix'>
        <div className='vk_form__section-left'>
          {label}: <UserImage src={imgUrl} />
        </div>
        <div className='vk_form__section-right'>
          <div>
            <input
              type='url'
              className='vk_form__section-input'
              placeholder={Language.take('config.imageSelect.link')}
              value={imgTemp}
              onChange={e => onChange(e.target.value, 'temp', `${tempKey}Img`)}
            />
            <button
              className='vk_form__section-button'
              onClick={() => onChangeImage('temp', tempKey, imgTemp)}
            >
              {Language.take('config.imageSelect.button')}
            </button>
          </div>
          <label className='vk_form__section-label'>
            <div
              className='vk_form__section-button upload-button'
            >
              {Language.take('config.imageSelect.upload')}
            </div>
            <input
              className='d-none'
              type='file'
              onChange={image => onChangeImage('file', tempKey, image)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default UserImageSelect;
