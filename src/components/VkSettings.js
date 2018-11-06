import React, { Component } from 'react';
import { TextInput, CheckBox, UserImageSelect } from './Vk/mini';

class VkSettings extends Component {
  render() {
    const {
      header,
      components,
      companion,
      current,
      content,
      temp,
      onChange,
      onChangeImage
    } = this.props;

    return (
      <div className='widget-right__wrapper'>
        <div className='widget-right__config'>
          <h3 className='widget-right__config-title'>Верхняя часть</h3>
          <TextInput
            label={'Время в сети'}
            value={header.time}
            onChange={e => onChange(e.target.value, 'header', 'time')}
            table
          />
          <CheckBox
            label={'С мобильного'}
            checked={header.mobile}
            onChange={e => onChange(e.target.checked, 'header', 'mobile')}
            table
          />

          <h3 className='widget-right__config-title border-top'>Текущий пользователь</h3>
          <TextInput
            label={'Полное имя'}
            value={current.name}
            onChange={e => onChange(e.target.value, 'current', 'name')}
            table
          />
          <UserImageSelect
            label={'Аватар'}
            imgUrl={current.image}
            imgTemp={temp.currentImg}
            tempKey='current'
            onChange={onChange}
            onChangeImage={onChangeImage}
          />

          <h3 className='widget-right__config-title border-top'>Собеседник</h3>
          <TextInput
            label={'Полное имя'}
            value={companion.name}
            onChange={e => onChange(e.target.value, 'companion', 'name')}
            table
          />
          <UserImageSelect
            label={'Аватар'}
            imgUrl={companion.image}
            imgTemp={temp.companionImg}
            tempKey='companion'
            onChange={onChange}
            onChangeImage={onChangeImage}
          />

          <h3 className='widget-right__config-title border-top'>Контент</h3>
          <TextInput
            label={'Высота контента'}
            value={content.height}
            onChange={e => onChange(e.target.value, 'content', 'height')}
            type='number'
            table
          />

          <h3 className='widget-right__config-title border-top'>Разделы</h3>
          <CheckBox
            label={'Показать верхнюю часть'}
            checked={components.header}
            onChange={e => onChange(e.target.checked, 'components', 'header')}
            table
          />
          <CheckBox
            label={'Показать нижнюю часть'}
            checked={components.footer}
            onChange={e => onChange(e.target.checked, 'components', 'footer')}
            table
          />
        </div>
      </div>
    );
  }
}

export default VkSettings;
