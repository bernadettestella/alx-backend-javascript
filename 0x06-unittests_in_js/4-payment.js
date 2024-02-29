const Utils =  require('./utils');

function sendPaymentToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log('The total is: ${result}');
}

module.exports = sendPaymentToApi;