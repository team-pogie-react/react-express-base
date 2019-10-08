import React from 'react'
import { Grommet, Box, Grid , grommet } from 'grommet'

import axios from 'axios';
import CardImage from '../widget/cardImage';

//todo get data from API

export default function catalog(props) {

    let imageURL = 'https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg';
    let text = 'Dachshund';
    const url = '/';
    
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        imageURL = response.data.message;
        text  = response.data.message;
       console.log(response);
       console.log(imageURL);
    })
    .catch(error => {
        console.log(error);
    });


  return (
    <Grommet theme={grommet}>
        <Box align="center" justify="center" pad="small">
            <Grid align="center" alignContent="center" columns={{"size":"small","count":"fill"}} fill="horizontal" gap="xsmall" justify="center" margin="xsmall" rows="medium">
                <CardImage
                    imageURL={imageURL}
                    text={text}
                    url={url}
                />
            </Grid>
        </Box>
    </Grommet>
  );
}
