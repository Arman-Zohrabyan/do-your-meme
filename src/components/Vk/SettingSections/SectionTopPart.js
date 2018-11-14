import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { TextInput, CheckBox } from '../mini';
import Language from '../../../classes/Language';

class SectionTopPart extends Component {
  render() {
    const {
      header,
      onChange
    } = this.props;

    return (
      <Fragment>
          <h3 className='widget-right__config-title'>{Language.take('config.top.title')}</h3>
          <TextInput
            label={Language.take('config.top.online')}
            value={header.time}
            onChange={e => onChange(e.target.value, 'header', 'time')}
            required
            table
          />
          <CheckBox
            label={Language.take('config.top.mobile')}
            checked={header.mobile}
            onChange={e => onChange(e.target.checked, 'header', 'mobile')}
            table
          />
      </Fragment>
    );
  }
}

export default SectionTopPart;
