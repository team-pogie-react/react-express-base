import React from 'react'
import { Grommet, Grid, Box, Text, Button, Menu, Heading, Image, Paragraph , grommet } from 'grommet'
import { User } from 'grommet-icons'




const Brands = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()

  return (
  <Grommet theme={grommet}>
    <Grid fill="vertical" columns={[["small","medium"],["medium","flex"]]}>
      <Box justify="between" background={{"color":"light-2"}}>
        <Box align="center" justify="between" pad="small" direction="row">
          <Text size="large">
            Sidebar Links
          </Text>
        </Box>
        <Box flex={true} overflow="auto">
          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>          <Button hoverIndicator={true}>
            <Box pad={{"horizontal":"small","vertical":"xsmall"}} direction="row">
              <Text weight="bold">
                Category  Link
              </Text>
            </Box>
          </Button>
        </Box>
        <Box align="center" justify="between" direction="row">
          <Menu icon={<User />} items={[{"label":"Sign out"}]} dropAlign={{"bottom":"top","left":"left"}} />
        </Box>
      </Box>
      <Box>
        <Box align="center" pad="small" direction="row" justify="between" flex={false}>
          <Heading margin="none" size="small">
            Shop by Brands
          </Heading>
          <Button label="Action" primary={true} />
        </Box>
        <Box direction="row-responsive" fill="horizontal">
          <Grid align="center" fill="horizontal" alignContent="center" columns={{"size":"small","count":"fill"}}>
            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>            <Box align="center" justify="center" pad="small" width="small">
              <Image src="https://cld.partsimg.com/image/upload/d_noimage.jpg,h_210,w_210,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/kit1-011418-48-a_1.jpg" />
              <Heading textAlign="center" size="small" margin="none">
                Product title
              </Heading>
              <Paragraph>
                Product description sample text lorem impsum
              </Paragraph>
              <Button label="Add to Cart" />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  </Grommet>
  )
}

const screens = {
  4: Brands
}

export default () => {
  const [screen, setScreen] = React.useState(4)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
