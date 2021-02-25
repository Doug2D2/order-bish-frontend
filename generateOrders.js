var faker = require('faker');
var _ = require('lodash');

module.exports = function (){
  return {
    orders: _.times(10, function(n){
      return {
        id: n,
        product: faker.commerce.productName(),
        price: faker.commerce.price(),
        orderDate: faker.date.past(),
        company: faker.company.companyName(),
        trackingNumber: faker.random.uuid(),
        estArrival: faker.date.soon(),
        arrivedDate: '',
        notes: faker.lorem.words(),
      }
    })
  }
}

