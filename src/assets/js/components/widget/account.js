import React, { Component } from 'react';
import {  Grid, Box, Text, Paragraph, Form, TextInput, Button,FormField } from 'grommet'
import { storiesOf } from "@storybook/react";



const FormFieldLabel = props => {

  const { required, label, ...rest } = props;
  
  return (
    <FormField
      label={
        required ? (
          <Box direction="row">
            <Text>{label}</Text>
            <Text color="status-critical">*</Text>
          </Box>
        ) : (
          label
        )
      }
      required={required}
      {...rest}
    />
  );
};

class Account extends Component {


  render(){
 
    return (
      <Grid columns={{"size":"medium","count":"fit"}}>
        <Box align="center" justify="start" pad="small">
          <Box align="center" justify="center" pad="small">
            <Box align="start" justify="between" direction="column" flex={false} pad="xsmall" fill="horizontal">
              <Text textAlign="start" size="xlarge" weight="bold">
                Sign In
              </Text>
            </Box>
            <Box align="center" justify="center" pad="xsmall" direction="row-responsive" height="xxsmall">
              <Paragraph>
                Sample Notification message here
              </Paragraph>
            </Box>
            <Box align="center" justify="center" pad="small">
              <Form onSubmit={this.submitFormHandler} >
                <Box align="center" justify="center" pad="small">
                  <FormFieldLabel name="login_email" label="Email:" required />
                </Box>
                <Box align="center" justify="center" pad="small">
                  <FormFieldLabel name="password" label="Password:" type="password" required />
                </Box>
                <Box align="center" justify="center" pad="small">
                  <Button label="Login" name="login_password" ref="login_password"  type="submit" fill="horizontal" color="accent-2" gap="small" margin="small" primary={true} />
                </Box>
              </Form>
            </Box>
          </Box>
        </Box>
        <Box align="center" justify="center" pad="small">
          <Box align="center" justify="center" pad="small">
            <Box align="start" justify="between" direction="column" flex={false} pad="xsmall" fill="horizontal">
              <Text textAlign="start" size="xlarge" weight="bold">
                Create an Account
              </Text>
            </Box>
            <Box align="center" justify="center" pad="xsmall" direction="row-responsive" height="xxsmall">
              <Paragraph>
                Sample Notification message here
              </Paragraph>
            </Box>
            <Box align="center" justify="center" pad="small">
              <Form>
                <Box align="center" justify="center" pad="small" fill="horizontal" direction="column">
                  <FormFieldLabel name="first_name" label="First Name:" required />
                </Box>
                <Box align="center" justify="center" pad="small" fill="horizontal" direction="column">
                  
                  <FormFieldLabel name="last_name" label="Last Name:" required />
                </Box>
                <Box align="center" justify="center" pad="small">
                  
                  <FormFieldLabel name="email" label="Email Address:" required type='email' />
                </Box>
                <Box align="center" justify="center" pad="small">
                  
                  <FormFieldLabel name="password_register" label="Password:" required type="password" />
                </Box>
                <Box align="center" justify="center" pad="small">
                  <Button label="Register" type="submit" fill="horizontal" color="accent-2" gap="xsmall" margin="xsmall" onClick={this.formSubmitHandler} />
                </Box>
              </Form>
            </Box>
          </Box>
        </Box>
      </Grid>
    )
  }
}

storiesOf("FormField", module).add("Required Label", () => <Account />);

export default Account;