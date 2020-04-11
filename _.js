const _ = {
    clamp(num, lowerBound, upperBound){
      return Math.min(Math.max(num,lowerBound),upperBound)
    },
    inRange(num, start, end){
        if (end === undefined){
          end = start;
          start = 0;
        };
        if (start > end){
          let temp = end;
          end = start;
          start = temp;
        };
        const isInRange = (num >= start && num < end);
        return isInRange;
    }, 
    pad(string, length){
        if(string.length > length){
           return string;
        } else {
            let start = (Math.floor((length - string.length) / 2) + string.length);
            let startPad = string.padStart(start, ' ');
            return startPad.padEnd(length, ' ');
        }
    },
    /*pad(string, length){
        if(string.length > length){
           return string;
        } else {
          let start = (Math.floor((length - string.length) / 2));
          let end = (length - string.length - start);
          let paddedString = (' '.repeat(start) + string + ' '.repeat(end));
          return paddedString;
        };
    },*/
    has(object, key){
        if (object[key] === undefined){
          return false;
        } else {
          return true;
        }
      },
    invert(object){
      let newObject = {};
      for (let key in object){ //interates through the passed object 
        if(object.hasOwnProperty(key)) { //checks if the key argument is a property in object
        newObject[object[key]] = key; //if condition evaluates to true
        };
      return newObject;
      }
    },
    findKey(obj, func){
      for (let key in obj){
        if (func(obj[key]) === true){
        return key;
        } else {
        return undefined;
        };
      };
    },
    /*drop(array, dropNum){
      let newArray =[];
      if (dropNum > 0){
        newArray = array.slice(dropNum);
        return newArray;
      } else {
        newArray = array.slice(1);
        return newArray;
        }                      
    },*/
    drop(array, dropNum){
      if (dropNum === undefined){
        return dropNum = 1;
        };
      let droppedArray = array.slice(dropNum);
      return droppedArray;                           
    },
    dropWhile(array, predicate){
      let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    }, 
    chunk(array, size){
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
    }      
};

  
  
  
  //console.log(_.clamp(14,3,12));

  //console.log(_.inRange(5,3,8));

  //console.log(_.pad('word', 10));

  //console.log(_.invert());

  

// Do not write or modify code below this line.
module.exports = _;