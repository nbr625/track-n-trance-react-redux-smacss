export function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export function isUnique(array, value) {
  let index = onlyText(array).indexOf(value);
  return index === -1 ? true : false;
}

export function onlyText(array){
  return array.map(function(el) {
     return el.text
   });
}
