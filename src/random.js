export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomArrayIndex = (array) => Math.floor(array.length * Math.random());

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomArrayIndex(array);
  return array[randomIndex];
};
