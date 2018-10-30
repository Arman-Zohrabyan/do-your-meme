import React, { Component } from 'react';

class VkHeader extends Component {
  render() {
    return (
      <div className='vk_footer'>
        <div className='vk_footer__left'>
          <div className='vk_footer__clip'>
          </div>
        </div>
        <div className='vk_footer__center'>
          <div className='vk_footer__message'>
            <div className='vk_footer__message-text'>
              Напишите сообщение...
            </div>
            <div className='vk_footer__photo'>
            </div>
            <div className='vk_footer__smile'>
            </div>
          </div>
        </div>
        <div className='vk_footer__right'>
          <div className='vk_footer__microphone'>
          </div>
        </div>
      </div>
    );
  }
}

export default VkHeader;
