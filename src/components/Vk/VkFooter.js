import React, { Component } from 'react';

class VkHeader extends Component {
  render() {
    return (
      <div className='vk-widget_footer'>
        <div className='vk-widget_footer__left'>
          <div className='vk-widget_footer__clip'>
          </div>
        </div>
        <div className='vk-widget_footer__center'>
          <div className='vk-widget_footer__message'>
            <div className='vk-widget_footer__message-text'>
              Напишите сообщение...
            </div>
            <div className='vk-widget_footer__photo'>
            </div>
            <div className='vk-widget_footer__smile'>
            </div>
          </div>
        </div>
        <div className='vk-widget_footer__right'>
          <div className='vk-widget_footer__microphone'>
          </div>
        </div>
      </div>
    );
  }
}

export default VkHeader;
