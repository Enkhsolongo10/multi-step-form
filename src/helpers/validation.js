const EMAIL_REGEX = /[A-Za-z0-9]+@+[a-zA-Z]+\.+[a-zA-Z]{2,}/
const NAME_REGEX = /[a-zA-Z]{2,}/
const NUMBER_REGEX = /[0-9]{8,}/


export const validateStepOne = (form) => {
    let isValid = true;
    let newErrors ={
        firstName:"",
        lastName:"",
        userName:""
    }
    console.log(form, 'validate')
    if(form.firstName ===''){
        isValid = false;
        newErrors.firstName = "It cannot be empty."
    }
    if(!NAME_REGEX.test(form.firstName)){
        isValid = false;
        newErrors.firstName = "Firstname cannot contain special characters or numbers."
    }

    if(form.lastName ===''){
        isValid = false;
        newErrors.firstName = "It cannot be empty."
    }
    if(!NAME_REGEX.test(form.lastName)){
        isValid = false;
        newErrors.firstName = "Lastname cannot contain special characters or numbers."
    }

    if(form.userName ===''){
        isValid = false;
        newErrors.firstName = "It cannot be empty."
    }
    if(!NAME_REGEX.test(form.userName)){
        isValid = false;
        newErrors.firstName = "Username cannot contain special characters or numbers."
    } 

    return {isValid, newErrors}
};

// export const validateStepTwo = (formTwo) => {
//     let isValidTwo = true;
//     let newErrorsTwo = {
//         email:"",
//         phoneNumber:"",
//         password:"",
//         confirmPassword:"",
//     }

//     if(formTwo.email === ''){
//         isValidTwo = false;
//         newErrorsTwo.email = "It cannot be empty."
//     }
//     if(!EMAIL_REGEX.test(form.email)){
//         isValidTwo: false;
//         newErrorsTwo.email = "Please provide a valid email address."
//     }

//     if(formTwo.phoneNumber === ''){
//         isValidTwo = false;
//         newErrorsTwo.phoneNumber = "It cannot be empty."
//     }
//     if(!NUMBER_REGEX.test(formTwo.phoneNumber) === ''){
//         isValidTwo = false;
//         newErrorsTwo.phoneNumber =  "Please enter a valid phone number."
//     } 

//     return {isValidTwo, newErrorsTwo}
// };


export const Validation=()=>{

}
    

