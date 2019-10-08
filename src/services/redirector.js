import _ from 'lodash';

import BaseService from './services';
import Config from '../configs/services';

class Redirector extends BaseService {

    constructor(){
        super();
        this.config = _.get(Config, 'redirector', {});
    }

      get(url){
        if(url === ''){
          return { error : { message: 'invalid parameter.' }  };
        }

        const template = _.get(this, 'config.template', '');
        const options = {
        ..._.get(this, 'config.get'),
            template
        };

        return options;


        const data = {
            endPoint: 'https://api2-staging.usautoparts.com',
            path: '/Redirector/v1.0/getRedirect',
            params : {
                site: 'carparts.com',
                page_url: url
            }
        };

        return this._get(data);
    }

}

export default Redirector;
