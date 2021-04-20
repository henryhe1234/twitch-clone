import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
}from '../actions/types'

export default (state={},action)=>{
  switch(action.type){
    case FETCH_STREAMS:
      return {...state,..._.mapKeys(action.payload,"id")};//_.mapKeys from lodash take an array of object [{id:1,streamname:'a"},{id:2,streamname:'b"}], and create an new object with key of id in the array object, and put everything from the array object into the new object {"1":{id:1,streamname:'a"},"2":{id:2,streamname:'b"}};
    case FETCH_STREAM:
      return {...state,[action.payload.id]:action.payload};//new syntax
    case CREATE_STREAM:
      return{...state,[action.payload.id]:action.payload};
    case EDIT_STREAM:
      return{...state,[action.payload.id]:action.payload};
    case DELETE_STREAM:
      return _.omit(state,action.payload);//payload is the id itself

    default:
      return state
  }
}