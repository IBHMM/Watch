import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useActionData, useNavigate } from 'react-router-dom';

export function Signin() {
    const [form] = Form.useForm();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);

        const admins = await fetch("https://jsonwatchdb.vercel.app/admins");
        const data = await admins.json();

        if (data.some(admin => admin.name === values.name && admin.password === values.password)) {
            setLoading(false);
            localStorage.setItem('token', values.name);
            navigate('/admin', {replace: true});
        } else {
            setError(true);
            setLoading(false);
        }
    };

    const handleSignin = () => {
        form.validateFields()
            .then((values) => {
                onFinish(values);
            })
            .catch((errorInfo) => {
                console.log('Validation failed:', errorInfo);
            });
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="p-4 bg-white rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4 text-danger">Sign In</h2>
                {error && <Alert message="Invalid name or password" type="error" className="mb-3" />}
                <Form
                    form={form}
                    name="signin"
                    layout="vertical"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-100"
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                            onClick={handleSignin}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
