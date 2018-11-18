import React from 'react';
import { UserImage } from '../mini';

function WidgetMessage({ user, messageData }) {
	messageData = messageData[0];
  return (
    <div className='vk-widget_content__message-section'>
      <div className='vk-widget_content__messages-wrapper'>
        <div className='vk-widget_content__message-left'>
          <UserImage
            src={user.image}
            size='medium'
          />
        </div>
        <div className='vk-widget_content__message-right'>
          <div className='vk-widget_content__message vk-widget_content__message-data'>
            <span className='vk-widget_content__user-name'>
              {user.name}
            </span>
            <span className='vk-widget_content__message-time'>
              {messageData.msgTime}
            </span>
          </div>
          <div className='vk-widget_content__message'>
            {messageData.message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetMessage;
