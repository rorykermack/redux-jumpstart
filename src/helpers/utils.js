export const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxCeil = Math.floor(max);
  return Math.floor(Math.random() * (maxCeil - minCeil)) + minCeil;
};

export const find = (arr, findBy, equalTo) => {
  let key = 0;
  arr.map((item, i) => {
    if (item[findBy] === equalTo) {
      key = i;
    }
    return true;
  });
  return key;
};
