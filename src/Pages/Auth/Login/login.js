import { Button, Col, Form, Input, message, Row, Typography } from "antd";
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const Navigate = useNavigate()
  const { Title } = Typography;

  const initialState = {email:"" ,password:""}
  const [ state,setState]= useState(initialState)

  const handlechange =e=>setState(s=>({...s,[e.target.name]:e.target.value})) 
  const handleSubmit = ()=>{

    const {email,password}=state
    
const formdata = {email,password}

formdata.id = Math.random().toString(36).slice(2)
formdata.createTime = new Date().toLocaleTimeString()
console.log(formdata)
message.success("form is sucesdfully submit")
Navigate("/")
  }
  
  
  return (
    <>
      <div className="py-5 " >
        <div className="container ">
          <Row >
            <Col xs={24} md={20} className="text-center">
              <Title >
                Login
              </Title>
            </Col>
          </Row>
          <Form className="py-3 d-flex  justify-content-center align-item-center"  layout="vertical">
            <Row gutter={6}>
              <Col xs={24} md={16}> 
              <Form.Item label="Enter your Email" required>
              <Input type="text" placeholder="Enter your Email"  name="email" onChange={handlechange}/>
              </Form.Item>
              </Col>
              <Col xs={24} md={16} >
              <Form.Item label="Enter your Password" required>
              <Input.Password type="text" placeholder="Enter your Password"  name="password" onChange={handlechange} />
              </Form.Item>
              </Col>
              <Col xs={24} md={16} className="text-center">
              <Button type="primary" block htmlType="submit"  style={{maxWidth:"200px"}} onClick={handleSubmit} > Login In </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
