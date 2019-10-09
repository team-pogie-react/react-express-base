import React from 'react'
import { Grommet, Box, Anchor, Text , grommet } from 'grommet'

const footer = () => {
  const [] = React.useState()
  
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

// eslint-disable-next-line react/display-name
export default () => {
  const [screen, setScreen] = React.useState(1)
  // eslint-disable-next-line security/detect-object-injection
  const Screen = screens[screen]
  
return <Screen setScreen={setScreen} />
}
