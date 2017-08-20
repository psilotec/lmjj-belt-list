import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends Component {
  state = {
    submitAction: this.handleSubmit,
    showLogin: true,
  };

  componentDidMount() {
    // Disables submit at mount
    this.props.form.validateFields();
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.form.validateFields((error, values) => {
      if (!error) {
        // Fire off login or register action depending on this.state.showLogin
        this.state.showLogin
          ? // Login action
            this.props
              .login(values)
              // Catch firebase login errors and trigger ant error help message
              .catch(error => {
                this.props.form.setFields({
                  email: {
                    errors: [new Error(error.code)],
                    value: '',
                  },
                  password: {
                    value: '',
                  },
                });
              })
          : // Register action
            this.props
              .register(values)
              // Catch firebase login errors and trigger ant error help message
              .catch(error => {
                this.props.form.setFields({
                  email: {
                    errors: [new Error(error.code)],
                    value: '',
                  },
                  password: {
                    value: '',
                  },
                });
              });
      }
    });
  };

  showLoginOrRegister = () => {
    this.setState((prevState, props) => ({
      showLogin: !prevState.showLogin,
    }));
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;
    // Only show error after a field is touched
    const firebaseError = getFieldError('email');
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={emailError ? 'error' : ''}
          help={emailError || firebaseError || ''}
        >
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please enter an email address' },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="Email"
            />
          )}
        </FormItem>

        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter a password' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>

        {this.state.showLogin
          ? <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Log in
              </Button>
            </FormItem>
          : <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Register
              </Button>
            </FormItem>}

        {this.state.showLogin
          ? <a className="login-action-text" onClick={this.showLoginOrRegister}>
              Register
            </a>
          : <a className="login-action-text" onClick={this.showLoginOrRegister}>
              Log in
            </a>}
      </Form>
    );
  }
}

const WrappedLogin = Form.create()(Login);
export default WrappedLogin;
