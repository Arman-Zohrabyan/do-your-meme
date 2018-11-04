import React, { Component } from 'react';
import VkHeader from './Vk/VkHeader';
import VkFooter from './Vk/VkFooter';

class Vk extends Component {
  render() {
    const { header } = this.props;

    return (
      <div className='vk-widget'>
        <VkHeader
          companion={header.companion}
          time={header.time}
          isMobile={header.mobile}
          img={header.userImage}
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
