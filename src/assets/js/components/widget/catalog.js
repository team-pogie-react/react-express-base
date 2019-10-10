import React from 'react';
import { connect } from 'react-redux'
import {  Box, Grid  } from 'grommet'
import axios from 'axios';
import _ from 'lodash';
import CardImage from '../widget/cardImage';

// todo get data from API


  
class Catalog extends React.Component {


    state = {
        brands: []
    }

      componentDidMount() {


        axios.get(`http://hydra-staging.usautoparts.com/v1.0/Content2/?op={%22getContents%22:{%22site%22:%22carparts.com%22,%22uri%22:%22\/%22}}&data=[]`)
          .then(res => {
            const brandsList = res.data._payload.result.getContents.value.featuredBrands.values;
            // console.log(brandsList);

            const newbrandsLists = [];


            _.forEach(brandsList, (key) => {
                const newBrand = [];
                newBrand.imageURL = "https://css.jcwstatics.com/sites/cpwhitney/design/top_selling_cat/shockabsorber.jpg"
                newBrand.text = key.text
                newBrand.url = '/brands/'+key.mapping
                newbrandsLists.push(newBrand);
            });
            const brands = newbrandsLists
            this.setState( { brands }  );
          })
      }

    render() {
        return (
                <Box align="center" justify="center" pad="small">
                    <Grid align="center" alignContent="center" columns={{"size":"small","count":"fill"}} fill="horizontal" gap="xsmall" justify="center" margin="xsmall" rows="medium">
                    { this.state.brands.map(data => 
                        // eslint-disable-next-line react/jsx-key
                        <CardImage card={data} />
                    )}    
                    </Grid>
                </Box>
        );
    }
}

  
  export default connect()(Catalog)
  
