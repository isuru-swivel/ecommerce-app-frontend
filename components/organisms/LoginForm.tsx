import { useAppDispatch } from "@/hooks";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { login } from "@/features/auth/authSlice";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(login(values)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        router.push("/dashboard/crafts");
      } else {
        message.error(result.payload);
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
