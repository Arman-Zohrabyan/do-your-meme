import React from 'react';
import UserImage from './UserImage';

function UserImageSelect({ imgUrl, label, imgTemp, onChangeImage, onChange, tempKey }) {
  return (
    <div className='vk_form vk_form__table'>
      <div className='vk_form__label clearfix'>
        <div className='vk_form__img-select-left'>
          {label}: <UserImage imgUrl={imgUrl} />
        </div>
        <div className='vk_form__img-select-right'>
          <div>
            <input
              className='vk_form__img-select-input'
              type='text'
              placeholder='Добавить по ссылке'
              value={imgTemp}
              onChange={e => onChange(e.target.value, 'temp', `${tempKey}Img`)}
            />
            <button
              className='vk_form__img-select-button'
              onClick={() => onChangeImage('temp', tempKey, imgTemp)}
            >
              Добавить
            </button>
          </div>
          <label className='vk_form__img-select-label'>
            <div
              className='vk_form__img-select-button upload-button'
            >
              Загрузить аватар
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
