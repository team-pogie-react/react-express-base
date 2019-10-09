import React from 'react'
import { Box, Image, Text, Anchor } from 'grommet'


// eslint-disable-next-line react/prop-types
export default function CardImage({card}) {
    if (!card){
        return <div>Loading...</div>
    }
  // eslint-disable-next-line react/prop-types
  const {imageURL, url, text} = card;
  
  return (
        <Box align="center" justify="center" pad="small" gap="xsmall" margin="small" height="medium" width="medium" alignSelf="center" wrap={true} border={{"color":"accent-2","size":"xsmall"}} direction="column">
            <Box align="center" justify="center" pad="small" height="small" overflow="hidden" fill="horizontal" width="small" margin="xsmall" direction="row" gap="small" border={{"color":"accent-1","size":"xsmall"}}>
                <Image src={imageURL} fit="contain" />
            </Box>
            <Anchor href={url}>
                <Text textAlign="start">
                    {text}
                </Text>
            </Anchor>
        </Box>
  );
}
