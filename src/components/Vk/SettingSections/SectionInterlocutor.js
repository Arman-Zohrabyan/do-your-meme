import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TextInput, UserImageSelect, SettingButton } from '../mini';
import Language from '../../../classes/Language';
import ReactCardFlip from 'react-card-flip';

class SectionInterlocutor extends Component {
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
      companion,
      temp,
      onChange,
      onChangeImage
    } = this.props;

    return (
      <div ref={this.section} style={{'height': '186px'}}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
        >
          <div key="front" ref={this.front}>
            <h3 className='widget-right__config-title border-top'>{Language.take('config.companion.title')}</h3>
            <TextInput
              label={Language.take('config.companion.fullName')}
              value={companion.name}
              onChange={e => onChange(e.target.value, 'companion', 'name')}
              required
              table
            />
            <UserImageSelect
              label={Language.take('config.companion.avatar')}
              imgUrl={companion.image}
              imgTemp={temp.companionImg}
              tempKey='companion'
              onChange={onChange}
              onChangeImage={onChangeImage}
            />
            <SettingButton content={Language.take('config.companion.message')} full handleClick={this.showBack} />
          </div>
          <div key="back" ref={this.back}>
            <h3 className='widget-right__config-title border-top'>{Language.take('config.companion.title')}</h3>
            <TextInput
              label={Language.take('config.companion.fullName')}
              value={companion.name}
              onChange={e => onChange(e.target.value, 'companion', 'name')}
              required
              table
            />
            <UserImageSelect
              label={Language.take('config.companion.avatar')}
              imgUrl={companion.image}
              imgTemp={temp.companionImg}
              tempKey='companion'
              onChange={onChange}
              onChangeImage={onChangeImage}
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

export default SectionInterlocutor;
