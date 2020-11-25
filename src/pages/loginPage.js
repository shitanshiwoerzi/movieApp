import React from "react";
import { Form, Input, Card, Button} from 'antd';
import { withRouter ,Link} from "react-router-dom";

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const LoginPage = () => {
    // 提交表单且数据验证成功后回调事件
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    // 提交表单且数据验证失败后回调事件
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    
  
    return (
    <Card title="MoviesApp" className="login-form">
      <Form 
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input username',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: 'please input password',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" className="nav-link text-blue" block htmlType="submit" to="/home">
            <Link to ='/'>Login</Link>
          </Button>
        </Form.Item>
      </Form>
    </Card>
    );
  };
  
export default withRouter(LoginPage);