// 'use strict';

// module.exports = (req, res, next) => {
//   let { personId, product, quantity, status } = req.body;
//   let allowedProducts = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
//   let allowedStatus = ['placed', 'shipped', 'delivered', 'cancelled'];

//   if(!personId || typeof personId !== 'number') {
//     return res.status(400).send({error: 'Invalid Input'});
//   }

//   if(!product || !allowedProducts.includes(product)) {
//     return res.status(400).send({error: 'Invalid Input'});
//   }

//   if (!quantity || typeof quantity !== 'number' || quantity < 1) {
//     return res.status(400).send({error: 'Invalid Input'});
//   }

//   if (!status || !allowedStatus.includes(status)) {
//     return res.status(400).send({error: 'Invalid Input'});
//   }

//   next();
// };
