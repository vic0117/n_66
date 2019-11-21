import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap'
import './Breadcrumb.scss'



class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className = 'BreadcrumbCss'>
        <Link to="/" exact>
          <h6>首頁</h6>
        </Link>
        <span className='Breadsticks'>/</span>
        <h6 className='BreadActive'>旅遊列表</h6>
      </Container>
   )
  }
}

export default Breadcrumb;
