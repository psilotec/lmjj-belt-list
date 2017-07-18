import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends Component {
    componentDidMount() {
        // Disables submit at mount
        this.props.form.validateFields();
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                this.props.login(values);
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched
        const emailError = isFieldTouched('email') && getFieldError('email');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={emailError ? 'error' : ''}
                    help={emailError || ''}>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please enter an email address' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
                    )}
                </FormItem>

                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please enter a password' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>

                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}>
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedLogin = Form.create()(Login);
export default WrappedLogin;