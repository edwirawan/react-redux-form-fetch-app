import { TO_PAGE1, TO_PAGE2 } from '../actions';

function myReducer(state = {pageShown:'page1',data:{name:'',age:'',occupation:'',salary:''}},action) {
  switch (action.type) {
    case TO_PAGE1:
      return Object.assign({},state,{pageShown:'page1'},{data:action.data});
    case TO_PAGE2:
      return Object.assign({},state,{pageShown:'page2'},{data:action.data});
    default:
      return state;
  }
}

export default myReducer;
