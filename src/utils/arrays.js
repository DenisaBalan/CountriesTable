/* eslint-disable array-callback-return */
const filterArrayObject = (array, setter, key, attr) => {
  const data = array.filter((el) => {
      const keys = Object.keys(el);
      let keyVal;
      for(let i=0; i < keys.length; i++) {
          if(keys[i] === key ) {
              keyVal = el[keys[i]]
          }
      }
      return keyVal !== attr;
  })
  setter(data);
}

const selectArrayObject = (array, setter, key, attr) => {
  const data = array.filter((el) => {
      const keys = Object.keys(el);
      let keyVal;
      for(let i=0; i < keys.length; i++) {
          if(keys[i] === key ) {
              keyVal = el[keys[i]]
          }
      }
      return keyVal.includes(attr);
  })
  setter(data);
}

const orderArrayObject = (array, setter, key, type) => {
  for(let i = 0; i < array.length - 1; i++)
      for(let j = i + 1; j < array.length; j++)
      {
          const keys = Object.keys(array[i]);
          let keyVali, keyValj;

          for(let k=0; k < keys.length; k++) {
              if(keys[i] === key ) {
                  keyVali = array[i][keys[k]]
                  keyValj = array[j][keys[k]]
              }
          }

          if(keyVali > keyValj && type === 'asc')
          {
              let aux = array[i];
              array[i] = array[j];
              array[j] = aux;
          }

          if(keyVali < keyValj && type === 'desc')
          {
              let aux = array[i];
              array[i] = array[j];
              array[j] = aux;
          }

      }
  setter(array);
}

export {
  filterArrayObject,
  selectArrayObject,
  orderArrayObject
}