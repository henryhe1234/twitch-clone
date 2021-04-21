import React from 'react';
import _ from 'lodash'
import {connect} from 'react-redux'
import { formValues } from 'redux-form';
import {fetchStream,editStream} from '../../actions'
import StreamForm from './StreamForm';
class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)//Load the correspond stream into redux store, the match is from history object for route
  }
  onSubmit = (formValues)=>{
    this.props.editStream(this.props.match.params.id,formValues)
  }

  render(){
    if(!this.props.stream){
      return <div>Loading...</div>
    }
    return (//the stream has property 'title' and 'description' and the lodash _.pick will extract those two properties and return a new object
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit} />
      </div>
    )
  }

};

const mapStateToProps = (state,ownProps)=>{
  
  return {stream:state.streams[ownProps.match.params.id]}//get the id from redux store, ownProps is the prop pass into the StreamEdit component
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit)