import React from 'react'
import { Grommet, Box, Anchor, Image, Form, TextInput, Button , grommet } from 'grommet'
import { User } from 'grommet-icons'

const header = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  
return (
    <Grommet theme={grommet}>
        <Box align="center" justify="center" pad="small">
        <Box align="center" justify="start" direction="row-responsive" flex={false} gap="small" overflow="auto" pad="small" alignSelf="center" fill="horizontal" background={{"dark":false}}>
            <Anchor href="/" margin="xsmall">
            <Box align="stretch" gap="small" direction="row" pad="xsmall" overflow="auto" justify="start" alignSelf="center" basis="medium" fill="horizontal">
                <Image opacity="strong" src="https://css.jcwstatics.com/sites/cpwhitney/design/logo.png" fit="contain" />
            </Box>
            </Anchor>
            <Box align="center" justify="end" pad="xsmall" fill="vertical" basis="xlarge" direction="row-responsive">
            <Form>
                <TextInput type="text" size="small" plain={false} placeholder="Search" />
            </Form>
            <Button label="Go" hoverIndicator={true} reverse={false} margin="xsmall" />

            <Box align="center" justify="center" pad="small">
              <Anchor href="/account" margin="xsmall">
                <User size="medium" color="accent-1" />
              </Anchor>
            </Box>
            </Box>
        </Box>
        </Box>
    </Grommet>
  )
}

const screens = {
  1: header
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  
return <Screen setScreen={setScreen} />
}
