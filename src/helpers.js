export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
