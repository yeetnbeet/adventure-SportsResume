import React, { Component } from "react";
import { Table } from "reactstrap";


class about_hero extends Component{ 

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

        

    render () {

        let styles = {
            fontSize: '12px'
        }
        var response = this.data.map( (obj, index) => {
            return (
                <Table borderless responsive key={index}>
                        <tbody style={styles}>
                            <tr>

                                <th>NAME</th>
                                <td>{obj.detail.Name}</td>
                                 <th>AGE</th>
                                <td>{obj.detail.Age}</td>
                            </tr>
                            <tr>
                                <th>LOCATION</th>
                                <td>{obj.detail.Location}</td>
                                <th>DEVELOPER EXPERIENCE</th>
                                <td>{obj.detail.Experience}</td>
                            </tr>
                            <tr>
                                <th>DEGREE</th>
                                <td>{obj.detail.Degree}</td>
                                <th>CAREER-LEVEL</th>
                                <td>{obj.detail.Career}</td>
                            </tr>
                            <tr>
                                <th>PHONE</th>
                                <td>{obj.detail.Phone}</td>
                                <th>EMAIL</th>
                                <td>{obj.detail.Email}</td>
                               
                            </tr>
                            
                        </tbody>
                    </Table>
            )
        })
        return (
            <div>
                
                        <h5 style={{ paddingTop: '15px' }}><strong>ABOUT ME</strong></h5>
                        <hr />

                        <div>{response}</div>

                        <h5 style={{ paddingTop: '15px' }}><strong>I'M A FULL STACK DEV</strong></h5>
                        <hr />

                        <p style={styles}>
                             I've been exploring the world of web dev since building a minecraft server in 6th grade. Currently I'm pursuing my masters in Computer Science with a focus in distributed systems. I'm looking for a job where I can grow and recieve proffesional mentorship.
                        </p>
                        
                        

                    
            </div>
        )
    }

}

export default about_hero;