import React, { useState } from 'react';
import { Table, Button, Spin, Alert, Modal, Form, Input } from 'antd';
import { useAddNewArrivalMutation, useUpdateNewArrivalMutation, useDeleteNewArrivalMutation, useGetNewArrivalsQuery } from '../../../redux/api/apinewarrivals';

export function NewArrivalsMain() {
  const { data, isLoading, isError } = useGetNewArrivalsQuery();
  const [edit] = useUpdateNewArrivalMutation();
  const [handleDel] = useDeleteNewArrivalMutation();
  const [handleAdd] = useAddNewArrivalMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [form] = Form.useForm();

  const handleDelete = async (id) => {
    await handleDel(id);
  };

  const handleAddOrEditItem = async (values) => {
    if (isEditing) {
      await edit({ id: currentItem.id, ...values });
    } else {
      await handleAdd(values);
    }
    setIsModalVisible(false);
    form.resetFields();
    setCurrentItem(null);
    setIsEditing(false);
  };

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
    setIsModalVisible(true);
    form.setFieldsValue(item);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="item" style={{ width: '100px' }} />,
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
        <div>
          <Button type="link" onClick={() => handleDelete(record.id)} style={{ color: 'red' }}>
            Delete
          </Button>
          <Button type="link" onClick={() => handleEditClick(record)} style={{ color: 'gold' }}>
            Edit
          </Button>
        </div>
      ),
    },
  ];

  if (isLoading) return <Spin size="large" />;
  if (isError) return <Alert message="Error" description="Something went wrong" type="error" />;

  return (
    <div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-blue-700">Manage Popular Items</h1>
            <Button type="primary" size="large" className="bg-blue-500 hover:bg-blue-600" onClick={() => setIsModalVisible(true)}>
                Add New Item
            </Button>
        </div>
        <Table columns={columns} dataSource={data || []} rowKey="id" pagination={{ pageSize: 10 }} />
        <Modal
            title={isEditing ? "Edit Item" : "Add New Item"}
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleAddOrEditItem}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input the price!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Image URL" name="image" rules={[{ required: true, message: 'Please input the image URL!' }]}>
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">{isEditing ? 'Update Item' : 'Add Item'}</Button>
            </Form>
        </Modal>
    </div>
  );
}
