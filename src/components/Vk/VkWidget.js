import React, { Component } from 'react';
import VkHeader from './VkHeader';
import VkFooter from './VkFooter';

class VkWidget extends Component {
  renderHeader = () => {
    const {
      header,
      components,
      companion
    } = this.props;
    if (!components.header) {
      return null;
    }
    return (
      <VkHeader
        companion={companion.name}
        time={header.time}
        isMobile={header.mobile}
        img={companion.image}
      />
    );
  }

  renderFooter = () => {
    const { components } = this.props;
    if (!components.footer) {
      return null;
    }
    return <VkFooter />;
  }

  render() {
    const { content } = this.props;

    return (
      <div className='vk-widget' id='vk-chat-widget'>
        {this.renderHeader()}

        <div className='vk-widget_body' style={{height: `${content.height}px`}}>
          <div className='vk-widget_body__content vk-widget_content'>
            <h5 className='vk-widget_content__separator'>
              <span className='vk-widget_content__separator-content'>6 ноября</span>
            </h5>
          </div>
        </div>

        {this.renderFooter()}
      </div>
    );
  }
}

export default VkWidget;
