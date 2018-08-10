import React, { Component } from 'react';
// export const FormErrors = ({ formErrors }, nameValid ) =>
//   <div className='formErrors text-warning'>
//     {Object.keys(formErrors).map((fieldName, i) => {
//       if (formErrors[fieldName].length > 0) {
//         if (fieldName == nameValid) {
//           return (
//           <p key={i}>{fieldName} {formErrors[fieldName]}</p>
//         )       
//         }
//       } else {
//         return '';
//       }
//     })}
//   </div>

class FormErrors extends Component {
  constructor(props, context) {
    super(props, context);
  }

  // showMessage = () => {
  //   let result;
  //   if (this.props.formErrors.length > 0) {
  //     result = Object.keys(this.props.formErrors).map((fieldName, i) => {
  //       if (this.props.formErrors[fieldName].length > 0) {
  //         if (fieldName == 'Email') {
  //           return (
  //             <p key={i}>{fieldName} {this.props.formErrors[fieldName]}</p>
  //           )
  //         }
  //       } else {
  //         return '';
  //       }
  //     })
  //   }
  //   return result;

  // }

  render() {
    var { formErrors, nameValid } = this.props
    console.log(this.props);
    
    return (
      <div className='text-warning'>
        {Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            if (fieldName == nameValid) {
              return (
                <p key={i}>{nameValid} {formErrors[fieldName]}</p>
              )
            }
          } else {
            return '';
          }
        })
        }
      </div>
    )
  }
}

export default FormErrors;