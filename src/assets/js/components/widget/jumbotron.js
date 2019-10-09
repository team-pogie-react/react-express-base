import React from 'react'
import { Grommet, Box,  Image,  Text, Select, grommet } from 'grommet'

const jumbotron = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  
return (
    <Grommet theme={grommet}>
    <Box align="center" justify="center" pad="xsmall" direction="row-responsive" gap="xsmall">
    <Box align="start" direction="row-responsive" gap="xsmall" width="medium" basis="small">
        <Box align="center" justify="center" margin="xsmall" border={{"color":"accent-1","size":"large","side":"all","style":"solid"}} round="medium">
        <Box align="center" justify="center" pad="small" background={{"color":"neutral-3"}}>
            <Text size="medium" textAlign="center">
            Vehicle Selector

            </Text>
        </Box>
        <Box align="center" justify="center" pad="small">
            <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Year" value="Select Year" size="small" />
            <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Model" value="Select Model" size="small" />
            <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Make" value="Select Make" size="small" />
            <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Sub Model" value="Select Sub Model" size="small" />
            <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Engine" value="Select Engine" size="small" />
        </Box>
        </Box>
    </Box>
    <Box align="end" justify="end" pad="small" direction="row-responsive" gap="xsmall" width="large">
        <Box align="center" justify="center" pad="small">
        <Image src="https://image2.jcwstatics.com/sites/jcwhitney.com/heroshot_cpw/images/2019/09242019/jcw-featured-brand-arnott.jpg?10.01.2019" styling="img : {
        width: '500px',
        radius: '0',
    },
    " />
        </Box>
    </Box>
    </Box>

    </Grommet>
  )
}

const screens = {
  1: jumbotron
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  
return <Screen setScreen={setScreen} />
}
