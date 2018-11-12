import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import VkWidget from '../../components/Vk/VkWidget';
import VkSettings from '../../components/Vk/VkSettings';
import { change, changeImage } from '../../store/vk/actions';
import Language from '../../classes/Language';
import html2canvas from 'html2canvas';


class VkContainer extends Component {
  downloadImage = () => {
    html2canvas(document.querySelector('#vk-chat-widget')).then(canvas => {
      const link = document.createElement('a');
      link.setAttribute('download', 'screenshot.png');
      link.setAttribute('href', canvas.toDataURL().replace("image/png", "image/octet-stream"));
      link.click();
    });
  }

  render() {
    const { vk, onChange, onChangeImage } = this.props;

    return (
      <Row className=''>
        <Col md='12' lg='8' xl='7' className='widget-left'>
          <div className='vk-container'>
            <h2 className='vk-container__preview'>
              {Language.take('content.dialog.title')}
            </h2>
            <div className='vk-chat' style={{backgroundImage: 'url("./assets/images/descont.png")'}}>
              <VkWidget
                components={vk.components}
                header={vk.header}
                content={vk.content}
                companion={vk.companion}
              />
            </div>
            <div className='text-center'>
              <button
                className='vk_download-btn'
                onClick={this.downloadImage}
              >
                {Language.take('download').toUpperCase()}
              </button>
            </div>
          </div>
        </Col>
        <Col md='12' lg='4' xl='5' className='widget-right'>
          <VkSettings
            components={vk.components}
            header={vk.header}
            content={vk.content}
            current={vk.current}
            companion={vk.companion}
            temp={vk.temp}
            onChange={onChange}
            onChangeImage={onChangeImage}
          />
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
  },
  onChangeImage: (type, key, img) => {
    dispatch(changeImage(type, key, img))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VkContainer);
