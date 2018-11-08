import React, { Component } from 'react';
import { UserImage } from './mini';
import Language from '../../classes/Language';

class VkHeader extends Component {
  render() {
    const { companion, time, img, isMobile } = this.props;

    return (
      <div className='vk-widget_header'>
        <div className='vk-widget_header__left'>
          <img
            className='vk-widget_header__back-image'
            src='./assets/images/back.svg'
          />
          <div className='vk-widget_header__back'>
            {Language.take('content.back')}
          </div>
        </div>
        <div className='vk-widget_header__center'>
          <div className='vk-widget_header__user-name'>
            {companion}
          </div>
          <div className='vk-widget_header__online-status'>
            {time}
            { isMobile ? 
              <img
                className='vk-widget_header__online-status-image'
                src='./assets/images/mobile.png'
              /> : null
            }
          </div>
        </div>
        <div className='vk-widget_header__right'>
          <div className='vk-widget_header__mini-img-container'>
            <UserImage imgUrl={img} />
          </div>
          <img
            className='vk-widget_header__dots'
            src='./assets/images/dots.svg'
          />
          <img
            className='vk-widget_header__search'
            src='./assets/images/search.svg'
          />
        </div>
      </div>
    );
  }
}

export default VkHeader;
