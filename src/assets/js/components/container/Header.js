import React from 'react'
import ReactDOM from "react-dom";
import { Grommet, Box, Anchor, Image, Form, TextInput, Button , grommet } from 'grommet'


const Header = ({ setScreen}) => {
    const [layer, setLayer] = React.useState()
    return (
    <Grommet theme={grommet}>
      <Box align="center" justify="center" pad="small">
        <Box align="center" justify="start" direction="row" flex={false} gap="small" overflow="auto" pad="small" alignSelf="center" fill="horizontal" background={{"dark":false}}>
          <Anchor href="/" margin="xsmall">
            <Box align="stretch" gap="small" direction="row" pad="xsmall" overflow="auto" justify="start" alignSelf="center" basis="medium" fill="horizontal">
              <Image opacity="strong" src="https://css.jcwstatics.com/sites/cpwhitney/design/logo.png" fit="contain" />
            </Box>
          </Anchor>
          <Box align="center" justify="end" pad="xsmall" fill="vertical" basis="xlarge">
            <Form>
              <TextInput type="text" size="small" plain={false} />
              <Button label="Button" hoverIndicator={true} reverse={false} />
            </Form>
          </Box>
        </Box>
      </Box>
    </Grommet>
    )
  }
  

const screens = {
  1: Header
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;