import React from 'react'
import { Grommet, Box, Anchor, Image, Form, TextInput, Button, Text, Select, Grid , grommet } from 'grommet'

import CardImage from '../widget/cardImage';

const catalog = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  return (
    <Grommet theme={grommet}>
        <Box align="center" justify="center" pad="small">
            <Grid align="center" alignContent="center" columns={{"size":"small","count":"fill"}} fill="horizontal" gap="xsmall" justify="center" margin="xsmall" rows="medium">
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
                <CardImage/>
            </Grid>
        </Box>

    </Grommet>
  )
}

const screens = {
  1: catalog
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
