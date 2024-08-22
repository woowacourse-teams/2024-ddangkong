const randomPicker = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export default randomPicker;
