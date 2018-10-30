import React, { Component } from 'react';

class VkHeader extends Component {
  render() {
    const { name, time, img } = this.props;

    return (
      <div className='vk_header'>
        <div className='vk_header__left'>
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
          </div>
        </div>
        <div className='vk_header__right'>
          <div className='vk_header__search'>
          </div>
          <div className='vk_header__dots'>
          </div>
          <div className='vk_header__mini-img'>
          </div>
        </div>
      </div>
    );
  }
}

export default VkHeader;
