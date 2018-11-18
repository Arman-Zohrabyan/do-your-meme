import React from 'react';
import { UserImage } from '../mini';

function WidgetMessage({ user, messageData }) {
  const datas = [...messageData];
	const firstData = datas.shift();

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
              {firstData.msgTime}
            </span>
          </div>
          <div className='vk-widget_content__message'>
            {firstData.message}
          </div>
          {
            datas.map((data, key) =>
              <div className='vk-widget_content__message second-message' key={key}>
                {data.message}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default WidgetMessage;
