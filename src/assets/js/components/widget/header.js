import React from 'react'
import { Grommet, Box, Anchor, Image, Form, TextInput, Button, Text, Select, Grid , grommet } from 'grommet'

const Header = ({ setScreen}) => {
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
        </Box>
      </Box>
    </Box>
    <Box align="center" justify="center" pad="small" fill="horizontal">
      <Box align="center" justify="center" pad="small" fill="horizontal" alignSelf="center" basis="xxsmall" width="xxsmall" direction="row-responsive" gap="small">
        <Anchor href="/">
          <Text margin="small">
            NavLinks
          </Text>
        </Anchor>        <Anchor href="/">
          <Text margin="small">
            NavLinks
          </Text>
        </Anchor>        <Anchor href="/">
          <Text margin="small">
            NavLinks
          </Text>
        </Anchor>        <Anchor href="/">
          <Text margin="small">
            NavLinks
          </Text>
        </Anchor>        <Anchor href="/">
          <Text margin="small">
            NavLinks
          </Text>
        </Anchor>
      </Box>
    </Box>
    <Box align="center" justify="center" pad="xsmall" direction="row-responsive" gap="xsmall">
      <Box align="start" direction="row-responsive" gap="xsmall" width="medium" basis="small">
        <Box align="center" justify="center" pad="small" margin="xsmall" border={{"color":"accent-1","size":"large","side":"all","style":"solid"}} round="medium">
          <Text size="medium" textAlign="center">
            Vehicle Selector

          </Text>
          <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Year" value="Select Year" size="small" />
          <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Make" value="Select Make" size="small" />
          <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Model" value="Select Model" size="small" />
          <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Sub Model" value="Select Sub Model" size="small" />
          <Select options={["Select Year","option 1","option 1"]} searchPlaceholder="Select Engine" value="Select Engine" size="small" />
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
    <Box align="center" justify="center" pad="small">
      <Grid align="center" alignContent="center" columns={{"size":"small","count":"fill"}} fill="horizontal" gap="xsmall" justify="center" margin="xsmall" rows="medium">
        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
          <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
            <Image src="https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/mirror.jpg" fit="contain" />
          </Box>
          <Text textAlign="start">
            Catalog text 
          </Text>
        </Box>
      </Grid>
    </Box>
    <Box align="center" justify="center" pad="small">
      <Box align="center" justify="center" pad="small">
        <Box align="center" justify="center" pad="small" fill="horizontal" alignSelf="center" basis="xxsmall" width="xxsmall" direction="row-responsive" gap="small">
          <Anchor href="/">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/">
            <Text margin="small">
              Footer NavLinks
            </Text>
          </Anchor>          <Anchor href="/">
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
  1: Header
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
