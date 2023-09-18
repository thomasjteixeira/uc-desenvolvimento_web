let a = 1;
let b = 2;

console.log(a + b);


//----------------------
function cadeMeuCafe(orderId) {
  return new Promise((resolve, reject) => {
    cafeAPI.checkStatus(orderId, (error, cafeStatus) => {
      if (error) {
        reject(error);
      } else {
        resolve(cafeStatus);
      }
    });
  });
}
