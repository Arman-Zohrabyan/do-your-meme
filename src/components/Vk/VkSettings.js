import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { TextInput, CheckBox, UserImageSelect, SettingButton } from './mini';
import {
  SectionContent,
  SectionCurrentUser,
  SectionInterlocutor,
  SectionTopPart,
  SectionSections
} from './SettingSections';
import { change, changeImage, addContent } from '../../store/vk/actions';
import Language from '../../classes/Language';

class VkSettings extends Component {
  render() {
    const {
      vk,
      onChange,
      onChangeImage,
      onAddContent
    } = this.props;

    const {
      header,
      components,
      companion,
      current,
      content,
      temp
    } = vk;

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
            addwidgetContent={onAddContent}
          />
          <SectionInterlocutor
            companion={companion}
            temp={temp}
            onChange={onChange}
            onChangeImage={onChangeImage}
            addwidgetContent={onAddContent}
          />
          <SectionContent
            content={content}
            onChange={onChange}
            addwidgetContent={onAddContent}
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

const mapStateToProps = (state) => ({
  vk: state.vk
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value, section, key) => {
    dispatch(change(value, section, key));
  },
  onChangeImage: (type, key, img) => {
    dispatch(changeImage(type, key, img))
  },
  onAddContent: (groupName) => {
    dispatch(addContent(groupName))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VkSettings);
