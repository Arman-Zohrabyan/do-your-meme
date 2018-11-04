import React, { Component } from 'react';
import Vk from '../components/Vk';
import { Row, Col } from 'reactstrap';

class VkContainer extends Component {
  render() {
    return (
      <Row className=''>
        <Col md='12' lg='8' className='widget-left' /*style={{backgroundColor: 'red'}}*/>
          <div className='vk-container'>
            <div className='vk-chat' style={{backgroundImage: 'url("./assets/images/descont.png")'}}>
              <Vk />
            </div>
          </div>
        </Col>
        <Col md='12' lg='4' className='widget-right' /*style={{backgroundColor: 'green'}}*/>
          functionality
        </Col>
      </Row>
    );
  }
}

export default VkContainer;
