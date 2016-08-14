import 'es6-promise';
import fetch from 'isomorphic-fetch';

export const TO_PAGE1 = 'TO_PAGE1';
export const TO_PAGE2 = 'TO_PAGE2';
export const UPDATE_DB = 'UPDATE_DB';

function goToPage(destPage,data) {
  return {
    type:destPage,
    data
  }
}

function fetchFromDB(destPage,newData) {
  let api;
  if(destPage === TO_PAGE1) {
    api = 'http://localhost:3000/api/form2'; //Going to page 1, so update form2
  }
  else {
    api = 'http://localhost:3000/api/form1';
  }
  console.log("fetchFromDB: ");
  console.log(JSON.stringify(newData));

  return fetch(api,{method:'POST',body:JSON.stringify(newData)});//https://davidwalsh.name/fetch https://github.com/github/fetch
  //return fetch(api,{method:'POST',body:'name=Edw&age=31'});

  //let formData = new FormData();
  //formData.append('name','Edwin');
  //formData.append('age','31');
  //return fetch(api,{method:'POST',body:formData});
}

//a Thunk
export function updateDB(destPage,newData) {
  return function (dispatch) {
    fetchFromDB(destPage,newData).
    then(response => response.json()).
    then(newState => {
      console.log("response: ");
      console.log(newState);
      dispatch(goToPage(destPage,newState));
    });
  }
}
