export default {

   redirector: {
       template: '/<%- version %>/<% action %>',
       version: 'v1.0',
       get: 'getRedirect',
       delete: 'deleteRedirect',
       purge: 'purgeAll',
       search: 'searchRedirect',
   },

  page: {
    version: 'v1.0',
    get: 'pagetype',
    purge: 'purgeAll',
  },


};
