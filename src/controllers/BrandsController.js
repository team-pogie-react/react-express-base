
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
    return response.render('index', {request});
  }

}

export default BrandsController;
