import React from 'react'
import { Box, Image,Text } from 'grommet'

const CardImage = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  return (
        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
            <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
                <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
            </Box>
            <Text textAlign="start">
                Catalog text 
            </Text>
        </Box>
  )
}

const screens = {
  1: CardImage
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
