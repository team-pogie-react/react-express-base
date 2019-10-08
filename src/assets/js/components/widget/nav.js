import React from 'react'
import { Grommet, Box, Anchor, Image, Form, TextInput, Button, Text, Select, Grid , grommet } from 'grommet'

const nav = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  return (
<Grommet theme={grommet}>

<Box align="center" justify="center" pad="small" fill="horizontal" background={{"color":"neutral-3"}}>
  <Box align="center" justify="center" pad="small" fill="horizontal" alignSelf="center" basis="xxsmall" width="xxsmall" direction="row-responsive" gap="small">
    <Anchor href="/" color="light-1">
      <Text margin="small">
        NavLinks
      </Text>
    </Anchor>        <Anchor href="/" color="light-1">
      <Text margin="small">
        NavLinks
      </Text>
    </Anchor>        <Anchor href="/" color="light-1">
      <Text margin="small">
        NavLinks
      </Text>
    </Anchor>        <Anchor href="/" color="light-1">
      <Text margin="small">
        NavLinks
      </Text>
    </Anchor>        <Anchor href="/" color="light-1">
      <Text margin="small">
        NavLinks
      </Text>
    </Anchor>
  </Box>
</Box>

</Grommet>
  )
}

const screens = {
  1: nav
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
