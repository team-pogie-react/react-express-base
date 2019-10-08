import React from 'react'
import { Grommet, Box, Anchor, Image, Form, TextInput, Button, Text, Select, Grid , grommet } from 'grommet'

const footer = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  return (
  <Grommet theme={grommet}>
    <Box align="center" justify="center" pad="small" background={{"color":"neutral-3"}}>
      <Box align="center" justify="center" pad="small">
        <Box align="center" justify="center" pad="small" fill="horizontal" alignSelf="center" basis="xxsmall" width="xxsmall" direction="row-responsive" gap="small">
          <Anchor href="/" color="light-1">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/" color="light-1">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/" color="light-1">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/" color="light-1">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/" color="light-1">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>
        </Box>
      </Box>
    </Box>
  </Grommet>
  )
}

const screens = {
  1: footer
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
