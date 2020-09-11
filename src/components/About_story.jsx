import React, { Component } from 'react';
import { Container, Col, Row} from 'reactstrap';




class about_story extends Component {


    render (){
        let styles = {
            height: '70px',
            width: '70px',
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '100%',
            margin:'20px auto'
        }
        return (
            <div>
                
                <h5 style={{ paddingTop: '25px' }}><strong>SERVICES</strong></h5>
                <hr />
                <Container>
                    <Row sm="12">
                        <Col sm="6" md= "6">
                            <div style={{  display: 'grid', justifyContent: 'center', textAlign:'center'}}>
                                <div style={styles}>
                                    <i className="fab fa-whatsapp" style={{ color: 'white', padding: '23px', fontSize: '25px' }} />
                                </div>
                                <p><strong>WEB DEVELOPMENT</strong></p>
                                <p>Nodejs, Nginx, and both relational and non relational datbases</p>
                            </div> 
                        </Col>
                        <Col sm="6" md="6">
                            <div style={{display:'grid', justifyContent:'center', textAlign:'center' }}>
                                <div style={styles}>
                                    <i className="fas fa-magic" style={{ color: 'white', padding: '23px', fontSize: '25px' , textAlign:'center' }} />
                                </div>
                                <p><strong>WEB DESIGN</strong></p>
                                <p>Experience creating web 2.0 ready visuals</p>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
                    
            </div>
        )
    }
}

export default about_story;