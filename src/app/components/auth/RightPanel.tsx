'use client'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
import React from 'react'
import { primaryColor } from '../constant/color';
import { inherits } from 'util';
import Link from 'next/link';

const RightPanel = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        email?: string;
        password?: string;
        remember?: string;
    };
    return (
        <div className='ml-32 mt-44'>
            <Typography style={{ fontFamily: "serif-display", fontSize: '44px', color: 'white' }} className='font-bold'>
                Welcome
            </Typography>
            <Typography style={{ fontSize: '24px', color: '#A5A5A5' }} >
                Let's log you in quickly
            </Typography>
            <div>

                <Form
                    name="basic"


                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>

                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        style={{ width: '600px' }}
                        className='mt-9'
                    >
                        <Input style={{ height: '60px', borderColor: primaryColor, color: '#A5A5A5' }} placeholder='Enter your email' />
                    </Form.Item>

                    <Form.Item<FieldType>

                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password style={{ height: '60px', borderColor: primaryColor }} placeholder="Enter your password" />
                    </Form.Item>


                    <div className='flex justify-between'>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ backgroundColor: primaryColor, color: 'black' }}
                                className='hover:bg-green-800'>
                                Submit
                            </Button>
                        </Form.Item>
                        <div className='text-white grid'>
                            don't have an account? 
                            <Link href={''} style={{color:primaryColor}}>Contact me!</Link>
                        </div>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default RightPanel