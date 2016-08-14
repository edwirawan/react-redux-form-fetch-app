import { connect } from 'react-redux';
import {TO_PAGE1,updateDB} from './actions';
import Form2 from './Form2';

const mapDispatchToProps = (dispatch) => {
  return {
    //newData = {occupation,salary}
    onSubmit: (newData) => {
      dispatch(updateDB(TO_PAGE1,newData));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    occupation: state.data.occupation,
    salary: state.data.salary
  };
};

const Form2Container = connect(mapStateToProps,mapDispatchToProps)(Form2);

export default Form2Container;
