export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export function _find(arr, findBy, equalTo) {
  let key = 0;
  arr.map((item, i) => {
    if(item[findBy] === equalTo) {
      key = i;
    }
  });
  return key;
}
