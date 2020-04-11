const array = ['string1', 'string2', 'string3', 'string4', 'string5'];
const numArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function chunk(array, size){
    const newArray = [];
    if (size === undefined){
        size = 1;
      } else {
          size = size;};
       
    for (j = 0; j < array.length; j + size){
      const chunkArray = array.splice(0, (0 + size));     
      newArray.push(chunkArray);
      };
    return newArray;
};

console.log(chunk(numArray, 3));