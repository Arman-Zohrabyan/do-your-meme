import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { CheckBox } from '../mini';
import Language from '../../../classes/Language';

class SectionSections extends Component {
  render() {
    const {
      components,
      onChange
    } = this.props;

    return (
      <Fragment>
          <h3 className='widget-right__config-title border-top'>{Language.take('config.sections.title')}</h3>
          <CheckBox
            label={Language.take('config.sections.top')}
            checked={components.header}
            onChange={e => onChange(e.target.checked, 'components', 'header')}
            table
          />
          <CheckBox
            label={Language.take('config.sections.bottom')}
            checked={components.footer}
            onChange={e => onChange(e.target.checked, 'components', 'footer')}
            table
          />
      </Fragment>
    );
  }
}

export default SectionSections;
