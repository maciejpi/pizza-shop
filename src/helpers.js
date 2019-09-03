export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const cardRegex = str => {
  const card = /^\d{16}$/;
  return card.test(str);
};

export const expDateRegex = str => {
  const date = /^\d{2}(\/)\d{2}$/g;
  const trimmedStr = str.trim();
  return date.test(trimmedStr);
};

export const cvvRegex = str => {
  const cvv = /^\d{3}$/;
  return cvv.test(str);
};
