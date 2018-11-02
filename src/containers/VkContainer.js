import React, { Component } from 'react';
import Vk from '../components/Vk';
import { Row, Col } from 'reactstrap';

class VkContainer extends Component {
  render() {
    return (
      <Row className='vk-container'>
        <Col md='12' lg='8' style={{backgroundColor: 'red'}}>
            <div className='vk-chat'>
              <Vk />
            </div>
        </Col>
        <Col md='12' lg='4' style={{backgroundColor: 'green'}}>
        a
        </Col>
      </Row>
    );
  }
}

export default VkContainer;
