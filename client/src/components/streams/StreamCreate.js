import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {

  renderInput(formProps){
    console.log(formProps)
    return (
      <div className="field">
        <label>{formProps.label}
        </label>
        <input {...formProps.input}/>
      </div>
    )
  }
  // onChange={formProps.input.onChange}
  // value={formProps.input.Change}

  render() {
    return(
      <form className="ui form" >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
      </form>
    )
  }
}

export default reduxForm({
  form:'streamCreate'
})(StreamCreate); //redux form return function and call it immediately with StreamCreate;
