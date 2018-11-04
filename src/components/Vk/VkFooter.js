import React, { Component } from 'react';

class VkHeader extends Component {
  render() {
    return (
      <div className='vk-widget_footer'>
        <div className='vk-widget_footer__left'>
          <img
            className='vk-widget_footer__clip'
            src='./assets/images/clip.svg'
          />
        </div>
        <div className='vk-widget_footer__center'>
          <div className='vk-widget_footer__message'>
            <div className='vk-widget_footer__message-text'>
              Напишите сообщение...
              <div className='vk-widget_footer__photo'>
              </div>
              <div className='vk-widget_footer__smile'>
              </div>
            </div>
          </div>
        </div>
        <div className='vk-widget_footer__right'>
          <img
            className='vk-widget_footer__microphone'
            src='./assets/images/microphone.svg'
          />
        </div>
      </div>
    );
  }
}

export default VkHeader;
