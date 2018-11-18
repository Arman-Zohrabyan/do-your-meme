import React, { Component } from 'react';
import VkHeader from './VkHeader';
import VkFooter from './VkFooter';
import WidgetSeparator from './widget/WidgetSeparator';
import WidgetMessage from './widget/WidgetMessage';

class VkWidget extends Component {
  renderHeader = () => {
    const {
      header,
      components,
      users
    } = this.props;
    if (!components.header) {
      return null;
    }
    return (
      <VkHeader
        companion={users.companion.name}
        time={header.time}
        isMobile={header.mobile}
        img={users.companion.image}
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
    const { content, widgetContent, users } = this.props;

    return (
      <div className='vk-widget' id='vk-chat-widget'>
        {this.renderHeader()}

        <div className='vk-widget_body' style={{height: `${content.height}px`}}>
          <div className='vk-widget_body__content vk-widget_content'>
            {
              widgetContent.map((elemet, key) =>
                Object.keys(elemet).map(groupName => {
                  if (groupName === 'separator') {
                    return <WidgetSeparator key={key} text={elemet[groupName]} />;
                  }
                  return <WidgetMessage key={key} user={users[groupName]} messageData={elemet[groupName]} />;
                })
              )
            }
          </div>
        </div>

        {this.renderFooter()}
      </div>
    );
  }
}

export default VkWidget;
