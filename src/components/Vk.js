import React, { Component } from 'react';
import VkHeader from './Vk/VkHeader';
import VkFooter from './Vk/VkFooter';

class Vk extends Component {
  render() {
    return (
      <div>
        <div className='vk_container'>
          <VkHeader
            name={'Тестовое Имя'}
            time={'был в сети только что'}
            img={''}
          />

          <div className='vk_body'>
            <div className='vk_body__content vk_content'>
            </div>
          </div>

          <VkFooter />
        </div>
      </div>
    );
  }
}

export default Vk;
