module.exports = function reverse (n) {

    let mod = Math.abs(n);
     
    let x = mod.toString().split('').map(Number).reverse().join('');
  
    x = Number(x);
  
    return x
  }
  