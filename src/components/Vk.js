import React, { Component } from 'react';
import VkHeader from './Vk/VkHeader';
import VkFooter from './Vk/VkFooter';

class Vk extends Component {
  render() {
    return (
      <div className='vk-widget'>
        <VkHeader
          name={'Тестовое Имя'}
          time={'был в сети только что'}
          img={''}
        />

        <div className='vk-widget_body'>
          <div className='vk-widget_body__content vk-widget_content'>
          </div>
        </div>

        <VkFooter />
      </div>
    );
  }
}

export default Vk;
