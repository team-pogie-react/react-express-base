import React from 'react'
import { Grommet, Box, Grid , grommet } from 'grommet'

import CardImage from '../widget/cardImage';

//todo get data from API

export default function catalog(data) {
    return (
        <Grommet theme={grommet}>
            <Box align="center" justify="center" pad="small">
                <Grid align="center" alignContent="center" columns={{"size":"small","count":"fill"}} fill="horizontal" gap="xsmall" justify="center" margin="xsmall" rows="medium">
                    <CardImage
                        imageURL={data.imageURL}
                        text={data.text}
                        url={data.url} 
                    />
                </Grid>
            </Box>
        </Grommet>
    );
}

