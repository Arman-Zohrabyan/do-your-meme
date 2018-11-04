import React, { Component } from 'react';

class VkHeader extends Component {
  render() {
    const { name, time, img, isMobile } = this.props;

    return (
      <div className='vk-widget_header'>
        <div className='vk-widget_header__left'>
          <img
            className='vk-widget_header__back-image'
            src='./assets/images/back.svg'
          />
          <div className='vk-widget_header__back'>
            Назад
          </div>
        </div>
        <div className='vk-widget_header__center'>
          <div className='vk-widget_header__user-name'>
            {name}
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
          <img
            className='vk-widget_header__mini-img'
            src='./assets/images/user.png'
          />
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
