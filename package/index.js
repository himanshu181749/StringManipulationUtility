// index.js
function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

function truncate(str, length = 100, ellipsis = '...') {
  if (typeof str !== 'string') return '';
  if (str.length <= length) return str;
  return str.slice(0, length) + ellipsis;
}

module.exports = { capitalize, reverse, truncate };
