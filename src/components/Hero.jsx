import React, { Component } from 'react';
import {
  Table,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";


class hero extends Component{
     
    data = [
        {
            detail: {
                Name: 'Sam',
                Age: '23',
                Location: 'Salt Lake City, USA',
                Experience: '2 years',
                Degree : 'BS Geology/Remote Sensing',
                Career : 'Entry-Level',
                Phone: '603 812 3023',
                Fax: '123_456',
                Email:'segalcsam@gmail',
                Website: 'www.example.com'
            }
        }]

    render (){

        let styles = {
            fontSize: '12px'
        }

        var result = this.data.map( (obj, index) =>{
            return (

                <div style={{marginTop:'15px'}} key={index}>
                    <h5 style={{fontSize:'100%'}}><strong>PROFESSIONAL DETAILS</strong></h5>
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQGkv9xbuX2Pag/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=dZFlEG3QQGYY00K9L0ZKEs9NkG5JQ0kClikyWZWyrB4"
                        alt="avatar"
                        style={{ width: '100%' }}
                    />
                    <Table responsive>
                        <tbody style = {styles}>
                            <tr>

                                <th>NAME</th>
                                <td>{obj.detail.Name}</td>
                            </tr>
                            <tr>

                                <th>AGE</th>
                                <td>{obj.detail.Age}</td>
                            </tr>
                            <tr>
                                <th>LOCATION</th>
                                <td>{obj.detail.Location}</td>
                            </tr>
                            <tr>
                                <th>EXPERIENCE</th>
                                <td>{obj.detail.Experience}</td>
                            </tr>
                            <tr>
                                <th>DEGREE</th>
                                <td>{obj.detail.Degree}</td>
                            </tr>
                            <tr>
                                <th>CAREER-LEVEL</th>
                                <td>{obj.detail.Career}</td>
                            </tr>
                            <tr>
                                <th>PHONE</th>
                                <td>{obj.detail.Phone}</td>
                            </tr>
                            <tr>
                                <th>EMAIL</th>
                                <td>{obj.detail.Email}</td>
                            </tr>
                            
                            
                            
                            
                        </tbody>
                    </Table>
                    

                    <Table>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                            </tr>


                            <h5>linkedin<a href="https://www.linkedin.com/in/sam-segal-32b4b9178/" target="_blank"><i className="fab fa-linkedin" style={{color:'#0077b5', marginLeft:'25px'}}/></a></h5>

                                                 
                                 
                                
                                
                                
                                
                                
                            

                            

                        </tbody>
                    </Table>

                     <Form>
        
        
        
      </Form>
                </div>
            )
        })

        return (
            <div>{result}</div>
        )
        
        
    }
}

export default hero;



