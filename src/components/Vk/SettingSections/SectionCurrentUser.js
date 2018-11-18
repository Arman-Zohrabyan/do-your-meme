import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TextInput, UserImageSelect, SettingButton, MessageBox } from '../mini';
import Language from '../../../classes/Language';
import ReactCardFlip from 'react-card-flip';

class SectionCurrentUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    };

    this.front = React.createRef();
    this.back = React.createRef();
    this.section = React.createRef();
  }

  handleAddSection = () => {
    const { addwidgetContent } = this.props;
    this.showFront();
    addwidgetContent('current');
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
      current,
      temp,
      onChange,
      onChangeImage
    } = this.props;

    return (
      <div ref={this.section} style={{'height': '175px'}} className='widget-right__section-border-top widget-right__section'>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
        >
          <div key="front" ref={this.front}>
            <h3 className='widget-right__config-title'>{Language.take('config.current.title')}</h3>
            <TextInput
              label={Language.take('config.current.fullName')}
              value={current.name}
              onChange={e => onChange(e.target.value, 'current', 'name')}
              required
              table
            />
            <UserImageSelect
              label={Language.take('config.current.avatar')}
              imgUrl={current.image}
              imgTemp={temp.currentImg}
              tempKey='current'
              onChange={onChange}
              onChangeImage={onChangeImage}
            />
            <SettingButton content={Language.take('config.current.message')} full handleClick={this.showBack} />
          </div>
          <div key="back" ref={this.back}>
            <h3 className='widget-right__config-title'>{Language.take('config.current.msg.title')}</h3>
            <TextInput
              label={Language.take('config.msgTime.label')}
              placeholder={Language.take('config.msgTime.placeholder')}
              value={current.msgTime}
              onChange={e => onChange(e.target.value, 'current', 'msgTime')}
              required
              table
            />
            <MessageBox
              label={Language.take('config.msg.label')}
              placeholder={Language.take('content.writeMessage')}
              value={current.message}
              onChange={e => onChange(e.target.value, 'current', 'message')}
              required
            />
            <SettingButton
              content={Language.take('cancel')}
              handleClick={this.showFront}
              distance
              ligth
            />
            <SettingButton
              content={Language.take('add')}
              handleClick={this.handleAddSection}
              distance
            />
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default SectionCurrentUser;
