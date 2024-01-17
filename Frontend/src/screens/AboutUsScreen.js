import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <div className='aboutbody'>
      <Row md={3}>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage'>
          <h1>Who are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md={3} ></Col>
        <Col md={6} className='aboutpage1'>
          <h1>Developer</h1>
          <p>
            Designed and developed by{' '}
            NURISLAM MRIDHA
          </p>
          <h3>Contact Details</h3>
          <i className='fas fa-phone'></i> 01753109207
          <br />
          <i className='fas fa-envelope-square'></i>{' '}
          <a target='_blank' href={`mailto:mannasourav111@gmail.com`}>
            mridha851@gmail.com
          </a>
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default AboutUsScreen
