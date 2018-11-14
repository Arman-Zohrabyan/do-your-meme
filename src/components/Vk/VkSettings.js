import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TextInput, CheckBox, UserImageSelect, SettingButton } from './mini';
import {
  SectionContent,
  SectionCurrentUser,
  SectionInterlocutor,
  SectionTopPart,
  SectionSections
} from './SettingSections';
import Language from '../../classes/Language';

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
          <SectionTopPart
            header={header}
            onChange={onChange}
          />
          <SectionCurrentUser
            current={current}
            temp={temp}
            onChange={onChange}
            onChangeImage={onChangeImage}
          />
          <SectionInterlocutor
            companion={companion}
            temp={temp}
            onChange={onChange}
            onChangeImage={onChangeImage}
          />
          <SectionContent
            content={content}
            onChange={onChange}
          />
          <SectionSections
            components={components}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default VkSettings;
