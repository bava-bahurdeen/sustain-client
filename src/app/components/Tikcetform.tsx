'use client'
import React from 'react';
import { Form, Input, Select, Checkbox, InputNumber, TimePicker, Button, Row, Col } from 'antd';
import axios from 'axios';

const { Option } = Select;

const Tikcetform = () => {
  const onFinish = async(values: any) => {
    try{
await axios.post("http://localhost:5000/users",values)
console.log("data Send successfully to the backend");

    }
    catch(error:any){
console.log(error.message)
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        >
        <h2 className='text-2xl font-semibold  text-center mb-10 underline'>Raise a Ticket</h2>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Select"
          name="place"
          rules={[{ required: true, message: 'Please select an option!' }]}
        >
          <Select placeholder="Select an option">
            <Option value="Tnagar 600006">T.nagar</Option>
            <Option value="Anna nagar 600040">Anna nagar</Option>
            <Option value="Mogappier 600037">Mogappier</Option>
            <Option value="padi 600050">Padi</Option>
          </Select>
        </Form.Item>

        
        <Form.Item  >
          <Row gutter={16} align="middle" className='!flex !justify-center !items-center' >
            <Col>
              <Checkbox>Plastic</Checkbox>
            </Col>
            <Col>
            <Form.Item name={'plastic'}>

              <InputNumber min={1}  defaultValue={1} />
            </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item >
          <Row gutter={16} align="middle" className='!flex !justify-center !items-center'>
            <Col>
              <Checkbox>Paper</Checkbox>
            </Col>
            <Col>
            <Form.Item name={'paper'}>

              <InputNumber min={1}  defaultValue={1} />
            </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item >
          <Row gutter={16} align="middle" className='!flex !justify-center !items-center'>
            <Col>
              <Checkbox>Old untorn dresses</Checkbox>
            </Col>
            <Col>
            <Form.Item name={'old_untorn_dresses'}>

              <InputNumber min={1}  defaultValue={1} />
            </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row gutter={16} align="middle" className='!flex !justify-center !items-center'>
            <Col>
              <Checkbox>Decarative materials</Checkbox>
            </Col>
            <Col>
            <Form.Item >

              <InputNumber min={1} defaultValue={1} />
            </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item  >
          <Row gutter={16} align="middle" className='!flex !justify-center !items-center'>
            <Col>
              <Checkbox>Leather</Checkbox>
            </Col>
            <Col>
            <Form.Item name={'leather'}>

              <InputNumber min={1} max={10} defaultValue={1} />
            </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label="Time"
          name="time"
          rules={[{ required: true, message: 'Please select a time!' }]}
        >
          <TimePicker use12Hours  format="h:mm a" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className='!p-5 !py-2 '>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Tikcetform;
