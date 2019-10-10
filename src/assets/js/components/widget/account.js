import React from 'react'
import { Grommet, Grid, Box, Text, Paragraph, Form, TextInput, Button , grommet } from 'grommet'





const Screen1 = ({ setScreen}) => {

  const [layer, setLayer] = React.useState()

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
            <Form>
              <Box align="center" justify="center" pad="small">
                <TextInput placeholder="Username or Email" type="text" />
              </Box>
              <Box align="center" justify="center" pad="small">
                <TextInput type="password" placeholder="Password" />
              </Box>
              <Box align="center" justify="center" pad="small">
                <Button label="Login" type="submit" fill="horizontal" color="accent-1" gap="xsmall" margin="xsmall" primary={true} />
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
                <Box align="start" justify="center" pad="small" fill="horizontal">
                  <Text textAlign="start">
                    First Name:
                  </Text>
                </Box>
                <TextInput placeholder="First Name" type="text" />
              </Box>
              <Box align="center" justify="center" pad="small" fill="horizontal" direction="column">
                <Box align="start" justify="center" pad="small" fill="horizontal">
                  <Text textAlign="start">
                    Last Name:
                  </Text>
                </Box>
                <TextInput placeholder="Last Name" type="text" />
              </Box>
              <Box align="center" justify="center" pad="small">
                <Box align="start" justify="center" pad="small" fill="horizontal">
                  <Text textAlign="start">
                    Email:
                  </Text>
                </Box>
                <TextInput placeholder="Email" type="text" />
              </Box>
              <Box align="center" justify="center" pad="small">
                <Box align="start" justify="center" pad="small" fill="horizontal">
                  <Text textAlign="start">
                    Password:
                  </Text>
                </Box>
                <TextInput type="password" placeholder="Password" />
              </Box>
              <Box align="center" justify="center" pad="small">
                <Button label="Register" type="submit" fill="horizontal" color="accent-1" gap="xsmall" margin="xsmall" primary={true} />
              </Box>
            </Form>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

const screens = {
  1: Screen1
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
