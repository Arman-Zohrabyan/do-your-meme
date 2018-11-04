import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Vk from '../components/Vk';
import { TextInput, CheckBox } from '../components/Vk/mini';
import { change } from '../store/vk/actions';


class VkContainer extends Component {
  render() {
    const { vk, onChange } = this.props;

    return (
      <Row className=''>
        <Col md='12' lg='8' xl='7' className='widget-left'>
          <div className='vk-container'>
            <div className='vk-chat' style={{backgroundImage: 'url("./assets/images/descont.png")'}}>
              <Vk
                components={vk.components}
                header={vk.header}
                content={vk.content}
              />
            </div>
          </div>
        </Col>
        <Col md='12' lg='4' xl='5' className='widget-right'>
          <div className='widget-right__wrapper'>
            <div className='widget-right__config'>
              <h3 className='widget-right__config-title'>Разделы</h3>
              <CheckBox
                label={'Показать верхнюю часть'}
                checked={vk.components.header}
                onChange={e => onChange(e.target.checked, 'components', 'header')}
                table
              />
              <CheckBox
                label={'Показать нижнюю часть'}
                checked={vk.components.footer}
                onChange={e => onChange(e.target.checked, 'components', 'footer')}
                table
              />
              <h3 className='widget-right__config-title border-top'>Верхняя часть</h3>
              <TextInput
                label={'Собеседник'}
                value={vk.header.companion}
                onChange={e => onChange(e.target.value, 'header', 'companion')}
                table
              />
              <TextInput
                label={'Время в сети'}
                value={vk.header.time}
                onChange={e => onChange(e.target.value, 'header', 'time')}
                table
              />
              <CheckBox
                label={'С мобильного'}
                checked={vk.header.mobile}
                onChange={e => onChange(e.target.checked, 'header', 'mobile')}
                table
              />
              <TextInput
                label={'Высота контента'}
                value={vk.content.height}
                onChange={e => onChange(e.target.value, 'content', 'height')}
                type='number'
                table
              />
            </div>
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
