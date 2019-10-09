
class BrandsController {


  /**
   * Ping endpoint.
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @returns {Object}
   */
  indexAction(request, response) {
    return response.render('brands', {request});
  }

}

export default BrandsController;
