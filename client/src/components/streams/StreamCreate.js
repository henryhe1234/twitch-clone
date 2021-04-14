import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  renderError({error,touched}){
    
    if(touched && error){
      return(
        <div className = "ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = (formProps) =>{//the Field component from redux-form will pass formPorps to the component function and I name it formPorps
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{formProps.label}
        </label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    )
  }
  onSubmit(formValues){

    // console.log(formValues)
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues)=>{//function is ran when Form is initially rendered or user interacts with it
  const errors = {};//validate function will check the errors object properties if any match the title of Field in this case if errors objects have properties title and description
  if(!formValues.title){
    errors.title='You must enter a title';
  }
  if(!formValues.description){
    errors.description = 'You must enter a description';
  }
  return errors;
}

export default reduxForm({//redux-form will wrap a lot of stuff and pass it as props to this components
  form:'streamCreate',
  validate:validate
})(StreamCreate); //redux form return function and call it immediately with StreamCreate;
