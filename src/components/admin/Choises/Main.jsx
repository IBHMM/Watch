import React, { useState, useEffect } from 'react';
import { Table, Button, Spin, Alert, Modal, Form, Input } from 'antd';
import { useGetChoiseQuery } from '../../../redux/api/apichoise';

export function ChoiceMain() {
  const { data, isLoading, isError } = useGetChoiseQuery();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentChoice, setCurrentChoice] = useState(null);
  const [form] = Form.useForm();
  const [image, setImage] = useState(null); 

  useEffect(() => {
    if (currentChoice) {
      form.setFieldsValue({
        title: currentChoice.title,
        image: currentChoice.image,
      });
      setImage(currentChoice.image);
    }
  }, [currentChoice, form]);

  const handleDelete = (id) => {
   
  };

  const handleAddOrEditChoice = (values) => {
    if (isEditing) {
      
    } else {
     
    }
    setIsModalVisible(false);
    form.resetFields();
    setImage(null); 
    setCurrentChoice(null);
    setIsEditing(false); 
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleEditClick = (choice) => {
    setCurrentChoice(choice);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="choice" style={{ width: '100px', height: 'auto' }} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            type="link"
            onClick={() => handleDelete(record.id)}
            style={{ color: 'red' }}
          >
            Delete
          </Button>
          <Button
            type="link"
            onClick={() => handleEditClick(record)}
            style={{ color: 'gold' }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  if (isLoading) return <Spin size="large" />;
  if (isError) return <Alert message="Error" description="Something went wrong" type="error" />;

  return (
    <div className="p-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-blue-700">Manage Choices</h1>
        <Button type="primary" size="large" className="bg-blue-500 hover:bg-blue-600" onClick={() => setIsModalVisible(true)}>
          Add New Choice
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data || []}
        rowKey="id"
        pagination={{ pageSize: 10 }} 
      />
      <Modal
        title={isEditing ? "Edit Choice" : "Add New Choice"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddOrEditChoice}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true, message: 'Please input the image URL!' }]}
          >
            <Input value={image} onChange={handleImageChange} />
          </Form.Item>
          <Form.Item>
            {image && <img src={image} alt="Preview" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEditing ? 'Update Choice' : 'Add Choice'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
