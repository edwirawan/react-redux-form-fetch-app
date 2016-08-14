import { connect } from 'react-redux';
import {TO_PAGE2,updateDB} from './actions';
import Form1 from './Form1';

const mapDispatchToProps = (dispatch) => {
  return {
    //newData = {name,age}
    onSubmit: (newData) => {
      dispatch(updateDB(TO_PAGE2,newData));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    name: state.data.name,
    age: state.data.age
  };
};

const Form1Container = connect(mapStateToProps,mapDispatchToProps)(Form1);

export default Form1Container;
