import React, { useState, useEffect } from 'react';
import { Table, Button, Spin, Alert, Modal, Form, Input } from 'antd';
import { useAddPopularItemMutation, useChangePopularItemMutation, useDeletePopularItemMutation, useGetPopularItemsQuery } from '../../../redux/api/apipopularitems';

export function PopularItemsMain() {
  const { data, isLoading, isError } = useGetPopularItemsQuery();
  const [edit, { isLoading: isEditingLoading, isError: isEditError }] = useChangePopularItemMutation();
  const [handleDel, { isLoading: isDeleteLoading, isError: isDeleteError }] = useDeletePopularItemMutation();
  const [handleAdd, { isLoading: isAddLoading, isError: isAddError }] = useAddPopularItemMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [form] = Form.useForm();
  const [image, setImage] = useState('');

  useEffect(() => {
    if (currentItem) {
      form.setFieldsValue({
        name: currentItem.name,
        image: currentItem.image,
        price: currentItem.price
      });
      setImage(currentItem.image);
    }
  }, [currentItem, form]);

  const handleDelete = async (id) => {
    try {
      await handleDel(id).unwrap();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddOrEditItem = async (values) => {
    try {
      if (isEditing) {
        await edit({ id: currentItem.id, ...values, image });
      } else {
        await handleAdd({ ...values, image });
      }
      setIsModalVisible(false);
      form.resetFields();
      setImage('');
      setCurrentItem(null);
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="item" style={{ width: '100px', height: 'auto' }} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
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
            loading={isDeleteLoading}
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
        <h1 className="text-xl font-semibold text-blue-700">Manage Popular Items</h1>
        <Button type="primary" size="large" className="bg-blue-500 hover:bg-blue-600" onClick={() => setIsModalVisible(true)}>
          Add New Item
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data || []}
        rowKey="id"
        pagination={{ pageSize: 10 }} 
      />
      <Modal
        title={isEditing ? "Edit Item" : "Add New Item"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddOrEditItem}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="price"
            name="price"
            rules={[{ required: true, message: 'Please input the price!' }]}
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
            <Button type="primary" htmlType="submit" loading={isEditing ? isEditingLoading : isAddLoading}>
              {isEditing ? 'Update Item' : 'Add Item'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
