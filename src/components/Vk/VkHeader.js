import React, { Component } from 'react';

class VkHeader extends Component {
  render() {
    const { name, time, img } = this.props;

    return (
      <div className='vk_header'>
        <div className='vk_header__left'>
          <img
            className='vk_header__back-image'
            src='./assets/images/back.svg'
          />
          <div className='vk_header__back'>
            Назад
          </div>
        </div>
        <div className='vk_header__center'>
          <div className='vk_header__user-name'>
            {name}
          </div>
          <div className='vk_header__online-status'>
            {time}
            <img
              className='vk_header__online-status-image'
              src='./assets/images/mobile.png'
            />
          </div>
        </div>
        <div className='vk_header__right'>
          <img
            className='vk_header__mini-img'
            src='./assets/images/user.png'
          />
          <img
            className='vk_header__dots'
            src='./assets/images/dots.svg'
          />
          <img
            className='vk_header__search'
            src='./assets/images/search.svg'
          />
        </div>
      </div>
    );
  }
}

export default VkHeader;
