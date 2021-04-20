import React from 'react';
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'
class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)//Load the correspond stream into redux store
  }

  render(){
    if(!this.props.stream){
      return <div>Loading...</div>
    }
    return (
      <div>
        {this.props.stream.title}
      </div>
    )
  }

};

const mapStateToProps = (state,ownProps)=>{
  
  return {stream:state.streams[ownProps.match.params.id]}//get the id from redux store, ownProps is the prop pass into the StreamEdit component
}

export default connect(mapStateToProps,{fetchStream})(StreamEdit)