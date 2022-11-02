export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomArrayItem = (array) => {
  const randomIndex = Math.floor(array.length * Math.random());

  return array[randomIndex];
};
