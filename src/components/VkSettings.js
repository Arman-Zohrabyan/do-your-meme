import React, { Component } from 'react';
import { TextInput, CheckBox, UserImageSelect } from './Vk/mini';
import Language from '../classes/Language';

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
          <h3 className='widget-right__config-title'>{Language.take('config.top.title')}</h3>
          <TextInput
            label={Language.take('config.top.online')}
            value={header.time}
            onChange={e => onChange(e.target.value, 'header', 'time')}
            table
          />
          <CheckBox
            label={Language.take('config.top.mobile')}
            checked={header.mobile}
            onChange={e => onChange(e.target.checked, 'header', 'mobile')}
            table
          />

          <h3 className='widget-right__config-title border-top'>{Language.take('config.current.title')}</h3>
          <TextInput
            label={Language.take('config.current.fullName')}
            value={current.name}
            onChange={e => onChange(e.target.value, 'current', 'name')}
            table
          />
          <UserImageSelect
            label={Language.take('config.current.avatar')}
            imgUrl={current.image}
            imgTemp={temp.currentImg}
            tempKey='current'
            onChange={onChange}
            onChangeImage={onChangeImage}
          />

          <h3 className='widget-right__config-title border-top'>{Language.take('config.companion.title')}</h3>
          <TextInput
            label={Language.take('config.companion.fullName')}
            value={companion.name}
            onChange={e => onChange(e.target.value, 'companion', 'name')}
            table
          />
          <UserImageSelect
            label={Language.take('config.companion.avatar')}
            imgUrl={companion.image}
            imgTemp={temp.companionImg}
            tempKey='companion'
            onChange={onChange}
            onChangeImage={onChangeImage}
          />

          <h3 className='widget-right__config-title border-top'>{Language.take('config.content.title')}</h3>
          <TextInput
            label={Language.take('config.content.height')}
            value={content.height}
            onChange={e => onChange(e.target.value, 'content', 'height')}
            type='number'
            table
          />

          <h3 className='widget-right__config-title border-top'>{Language.take('config.sections.title')}</h3>
          <CheckBox
            label={Language.take('config.sections.top')}
            checked={components.header}
            onChange={e => onChange(e.target.checked, 'components', 'header')}
            table
          />
          <CheckBox
            label={Language.take('config.sections.bottom')}
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
