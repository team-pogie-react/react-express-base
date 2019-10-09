import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Grommet, Box, Anchor, Text, grommet } from 'grommet'
import fetchNav from '../../actions/widgets/nav';
import axios from 'axios';
import _ from 'lodash';

class NavigationList extends React.Component {
  state = {
    listItems: []
  }
  componentDidMount() {
    axios.get(`http://hydra-staging.usautoparts.com/v1.0/Catalog2/?op=getCategories&data={%22catalogType%22:%22Auto%22,%22catalogSource%22:%22Endeca%22,%22site%22:%22carparts.com%22,%22type%22:%22top%22,%22rank%22:%22msv_30%20desc%22,%22useSelectedVehicle%22:1,%22phoenix%22:1}`)
      .then(res => {
        const nav = res.data._payload.result.getCategories;
        const newDataCategory = [];
        
        _.forEach(nav, (key,value) => {
          newDataCategory.push(value);
        });
        const listItems = newDataCategory
        this.setState( { listItems }  );
        
      })
  }
  render() {
    return (
      <Grommet theme={grommet} onLoad={this.onLoad}>
        <Box align="center" justify="center" pad="small" fill="horizontal" background={{"color":"neutral-3"}}>
          <Box align="center" justify="center" pad="small" fill="horizontal" alignSelf="center" basis="xxsmall" width="xxsmall" direction="row-responsive" gap="small">
            { this.state.listItems.map(listItems => 
            <Anchor href="/" color="light-1">
              <Text margin="small">
              {listItems}
              </Text>
            </Anchor> 
            )}
          </Box>
        </Box>

      </Grommet>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchNav }, dispatch );
}

export default connect(null, mapDispatchToProps)(NavigationList)
