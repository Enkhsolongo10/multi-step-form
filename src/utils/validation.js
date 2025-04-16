export const validation = () => {
    let isValid = true;
    newErrors = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
        profileImage: ""
    };

    if (form.firstName) {
        isValid = false;
        newErrors.firstName = "Cannot be empty.";
    };

    return { isValid, newErrors };
}







// const EMAIL_REGEX = /[A-Za-z0-9]+@+[a-zA-Z]+\.+[a-zA-Z]{2,}/
// const NAME_REGEX = /[a-zA-Z]{2,}/
// const NUMBER_REGEX = /[0-9]{8,}/
// const PASSWORD_REGEX = /[A-Za-z0-9@#$%&!]{8,}/
// const DATEOFBIRTH_REGEX = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

// export const validation = (form) => {
//     let isValid = true;
//     let newErrors ={
//         firstName:"",
//         lastName:"",
//         userName:""
//     }
//     console.log(form, 'validate')
   
//     if(form.firstName) {
//         isValid = false;
//         newErrors.firstName = "Firstname cannot contain special characters or numbers."
//     }
//     if(form.firstName ===''){
//         isValid = false;
//         newErrors.firstName = "It cannot be empty."
//     }

//     if(!NAME_REGEX.test(form.lastName)){
//         isValid = false;
//         newErrors.lastName = "Lastname cannot contain special characters or numbers."
//     }
//     if(form.lastName ===''){
//         isValid = false;
//         newErrors.lastName = "It cannot be empty."
//     }

//     if(!NAME_REGEX.test(form.userName)){
//         isValid = false;
//         newErrors.userName = "Username cannot contain special characters or numbers."
//     } 
//     if(form.userName ===''){
//         isValid = false;
//         newErrors.userName = "It cannot be empty."
//     }

//     return {isValid, newErrors}
// };

// export const validateStepTwo = (formTwo) => {
//     let isValidTwo = true;
//     let newErrorsTwo = {
//         email:"",
//         phoneNumber:"",
//         password:"",
//         confirmPassword:"",
//     }

//     if(!EMAIL_REGEX.test(formTwo.email)){
//         isValidTwo = false;
//         newErrorsTwo.email = "Please provide a valid email address."
//     }
//     if(formTwo.email === ''){
//         isValidTwo = false;
//         newErrorsTwo.email = "It cannot be empty."
//     }

//     if(!NUMBER_REGEX.test(formTwo.phoneNumber) === ''){
//         isValidTwo = false;
//         newErrorsTwo.phoneNumber =  "Please enter a valid phone number."
//     } 
//     if(formTwo.phoneNumber === ''){
//         isValidTwo = false;
//         newErrorsTwo.phoneNumber = "It cannot be empty."
//     }

//     if(!PASSWORD_REGEX.test(formTwo.password) === ''){
//         isValidTwo =false;
//         newErrorsTwo.password = "Please enter a valid phone number."
//     }
//     if(formTwo.password === ''){
//         isValidTwo = false;
//         newErrorsTwo.password = "It cannot be empty."
//     } 

//     if(!PASSWORD_REGEX.test(formTwo.confirmPassword) === ''){
//         isValidTwo =false;
//         newErrorsTwo.confirmPassword = "Please enter a valid phone number."
//     }
//     if(formTwo.password === ''){
//         isValidTwo = false;
//         newErrorsTwo.confirmPassword = "It cannot be empty."
//     } 

//     return {isValidTwo, newErrorsTwo}
// }; 

// export const validateStepThree = (formThree) => {
//     let isValidThree = true;
//     let newErrorsThree = {
//         dateOfBirth: "",
//         profileImage: ""
//     }
//     if(!DATEOFBIRTH_REGEX.test(formThree.dateOfBirth)){
//         isValidThree = false;
//         newErrorsThree.dateOfBirth = "Please enter a valid date of birth."
//     }
//     return
// }

// export const Validation=()=>{}
    

