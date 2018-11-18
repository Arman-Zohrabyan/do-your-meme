import React from 'react';

function WidgetSeparator({ text }) {
  return (
    <h5 className='vk-widget_content__separator'>
      <span className='vk-widget_content__separator-content'>{text}</span>
    </h5>
  );
}

export default WidgetSeparator;
