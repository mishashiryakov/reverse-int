module.exports = function reverse (n) {
  console.log(n);
  n += '';
  n = n.split('').reverse();
  let res = n.filter(num => /[0-9]/.test(num)).join('');
  return +res;
  }
