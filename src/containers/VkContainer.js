import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Vk from '../components/Vk';
import { TextInput } from '../components/Vk/mini';
import { change } from '../store/vk/actions';


class VkContainer extends Component {
  render() {
    const { vk, onChange } = this.props;

    return (
      <Row className=''>
        <Col md='12' lg='8' xl='7' className='widget-left'>
          <div className='vk-container'>
            <div className='vk-chat' style={{backgroundImage: 'url("./assets/images/descont.png")'}}>
              <Vk header={vk.header} />
            </div>
          </div>
        </Col>
        <Col md='12' lg='4' xl='5' className='widget-right'>
          <div className='widget-right__wrapper'>
            <TextInput
              label={'Собеседник'}
              value={vk.header.companion}
              onChange={e => onChange(e.target.value, 'header', 'companion')}
            />
            <TextInput
              label={'Время онлайн'}
              value={vk.header.time}
              onChange={e => onChange(e.target.value, 'header', 'time')}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  vk: state.vk
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value, section, key) => {
    dispatch(change(value, section, key));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VkContainer);
