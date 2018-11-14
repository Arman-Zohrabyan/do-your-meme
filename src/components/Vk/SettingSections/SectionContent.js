import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TextInput, SettingButton } from '../mini';
import Language from '../../../classes/Language';
import ReactCardFlip from 'react-card-flip';

class SectionContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    };

    this.front = React.createRef();
    this.back = React.createRef();
    this.section = React.createRef();
  }

  showBack = () => {
    this.setState({
      isFlipped: true
    });
  }
 
  showFront = () => {
    this.setState({
      isFlipped: false
    });
  }

  componentDidMount() {
    const frontHeight = ReactDOM.findDOMNode(this.front.current).offsetHeight;
    const backHeight = ReactDOM.findDOMNode(this.back.current).offsetHeight;
    const section = ReactDOM.findDOMNode(this.section.current);

    const height = frontHeight > backHeight ? frontHeight : backHeight;
    section.style.height = `${height+5}px`;
  }

  render() {
    const {
      content,
      onChange
    } = this.props;

    return (
      <div ref={this.section} style={{'height': '101px'}} className='widget-right__section-border-top widget-right__section'>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
        >
          <div key="front" ref={this.front}>
            <h3 className='widget-right__config-title'>{Language.take('config.content.title')}</h3>
            <TextInput
              label={Language.take('config.content.height')}
              value={content.height}
              onChange={e => onChange(e.target.value, 'content', 'height')}
              type='number'
              required
              table
            />
            <SettingButton content={Language.take('config.content.separator')} full handleClick={this.showBack} />
          </div>
          <div key="back" ref={this.back}>
            <h3 className='widget-right__config-title'>{Language.take('config.content.separator')}</h3>
            <TextInput
              label={Language.take('config.content.separator.label')}
              placeholder={Language.take('config.content.separator.placeholder')}
              value={content.separatorText}
              onChange={e => onChange(e.target.value, 'content', 'separatorText')}
              required
              table
            />
            <SettingButton
              content={Language.take('cancel')}
              handleClick={this.showFront}
              distance
              ligth
            />
            <SettingButton
              content={Language.take('add')}
              handleClick={this.showFront}
              distance
            />
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default SectionContent;
