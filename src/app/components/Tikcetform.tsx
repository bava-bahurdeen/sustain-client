'use client';
import React from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  InputNumber,
  TimePicker,
  Button,
  Row,
  Col,
} from 'antd';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Option } = Select;

const Tikcetform = () => {
  const onFinish = async (values: any) => {
    try {
      await axios.post('https://sustain-backend.onrender.com/ticket', values);
      toast('🦄 Successfully submitted...', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } catch (error: any) {
      return error.message;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 overflow-hidden">
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold  text-center mb-10 underline">
          Raise a Ticket
        </h2>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input className="!p-2 " />
        </Form.Item>
        <Form.Item
          label="Number"
          name="number"
          rules={[
            { required: true, message: 'Please input your number' },
            {
              min: 10,
              message: 'Enter your correct mobile without country code....',
            },
          ]}
        >
          <Input className="!p-2" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input className="!p-2" />
        </Form.Item>

        <Form.Item
          label="Select"
          name="place"
          rules={[{ required: true, message: 'Please select an option!' }]}
        >
          <Select placeholder="Select an option" className="!h-10  ">
            <Option value="Tnagar 600006">T.nagar</Option>
            <Option value="Anna nagar 600040">Anna nagar</Option>
            <Option value="Mogappier 600037">Mogappier</Option>
            <Option value="padi 600050">Padi</Option>
          </Select>
        </Form.Item>

        <div className="flex justify-center items-center">
          <Form.Item>
            <Checkbox>Plastic</Checkbox>
          </Form.Item>
          <Form.Item name={'plastic'}>
            <InputNumber min={1} defaultValue={1} />
          </Form.Item>
        </div>

        <div className="flex justify-center items-center">
          <Form.Item>
            <Checkbox>Paper</Checkbox>
          </Form.Item>
          <Form.Item name={'paper'}>
            <InputNumber min={1} defaultValue={1} />
          </Form.Item>
        </div>

        <div className="flex justify-center items-center">
          <Form.Item>
            <Checkbox>Old_dresses</Checkbox>
          </Form.Item>
          <Form.Item name={'old_untorn_dresses'}>
            <InputNumber min={1} defaultValue={1} />
          </Form.Item>
        </div>

        <div className="flex justify-center items-center">
          <Form.Item>
            <Checkbox>Decarative_materials</Checkbox>
          </Form.Item>
          <Form.Item name="decarative_materials">
            <InputNumber min={1} defaultValue={1} />
          </Form.Item>
        </div>

        <div className="flex justify-center items-center">
          <Form.Item>
            <Checkbox>Leather</Checkbox>
          </Form.Item>
          <Form.Item name={'leather'}>
            <InputNumber min={1} max={10} defaultValue={1} />
          </Form.Item>
        </div>

        <Form.Item
          label="Time"
          name="time"
          rules={[{ required: true, message: 'Please select a time!' }]}
        >
          <TimePicker use12Hours format="h:mm a" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="!p-5 !py-2 ">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Tikcetform;
