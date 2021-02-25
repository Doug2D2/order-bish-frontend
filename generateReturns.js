var faker = require('faker');
var _ = require('lodash');

module.exports = function(){
  return {
    returns: _.times(10, function(n) {
      return {
        id: n,
        product: faker.commerce.productName(),
        price: faker.commerce.price(),
        returnRequestDate: faker.date.past(),
        company: faker.company.companyName(),
        returnReceived: faker.random.boolean(),
        notes: faker.lorem.words()
      }
    })
  }
}
