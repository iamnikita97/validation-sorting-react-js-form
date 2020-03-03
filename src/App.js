import React, { Component } from 'react';
import './App.css';
import TextInput from './Compoents/TextInput';
import validate from './Compoents/validate';
import TextArea from './Compoents/TextArea';
import Email from './Compoents/Email';
import Select from './Compoents/Select';
import ListPerson from './Compoents/ListPerson';

class App extends Component {

  constructor() {
    super();

    this.state = {
      personData: [],
      formIsValid: false,
      formControls: {
        name: {
          value: 'jkjjnkjnknj',
          placeholder: 'What is your name',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        address: {
          value: 'hhjhhjhjhh',
          placeholder: 'What is your address',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        my_email: {
          value: 'jjkjkjkjjkjk',
          placeholder: 'What is your email',
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          },
          touched: false
        },
        gender: {
          value: 'female',
          placeholder: 'What is your gender',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'Select', displayValue: 'Select' },
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female' }
          ]
        },
      },
      handler: {
        delete: this.recordDeleteHandler,
        edit: this.recordEditHandler
      }

    }
  }


  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    //updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
    updatedFormElement.valid = true;

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });

  }


  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value
    }
    console.dir(formData);


    this.setState({
      personData: [...this.state.personData, formData]
    });
    console.log(this.state);
  }

  // recordDeleteHandler = (e,class,obj) => {

  //   console.log(e);
  //   console.log(e);


  // }
  recordDeleteHandler = (e, rowData) => {
    //console.log(e);
    //console.log(rowData);
    //return false;
    let personData = this.state.personData.filter(function (item,index) {
       return index !== rowData.tableData.id
    });
    this.setState({
       ...this.state,
       personData
     });
    //console.log(personData);
  }


  render() {

    return (
      <div className="App container" >
        <h1 ><center className="heading">Information Form</center></h1>
        <TextInput name="name"
          placeholder={this.state.formControls.name.placeholder}
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.name.touched}
          valid={this.state.formControls.name.valid}
        />

        <TextArea name="address"
          placeholder={this.state.formControls.address.placeholder}
          value={this.state.formControls.address.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.address.touched}
          valid={this.state.formControls.address.valid}
        />

        <Email name="my_email"
          placeholder={this.state.formControls.my_email.placeholder}
          value={this.state.formControls.my_email.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.my_email.touched}
          valid={this.state.formControls.my_email.valid}
        />
        <Select name="gender"
          value={this.state.formControls.gender.value}
          onChange={this.changeHandler}
          options={this.state.formControls.gender.options}
          touched={this.state.formControls.gender.touched}
          valid={this.state.formControls.gender.valid}
        />

        <button onClick={this.formSubmitHandler}
          className="btn btn-primary"
        //disabled={!this.state.formIsValid}
        >
          Submit
          </button>
        <ListPerson state={this.state} />
      </div>
    );

  }
}

export default App;
