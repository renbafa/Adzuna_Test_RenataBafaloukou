//Script where all elements from html file "come to life" and have a purpose
//Check function will check whether all requirements for the form have been fulfilled, before submitting
const check = () => {
    //Extract all the elements that need to be checked
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const notes = document.getElementById("notes").value;
    const message_error = document.getElementById("message_error");
    
    //Name should be longer than 3 characters in order to be accepted
    if(name.length < 3){
      let message = "Please enter a valid name";
      message_error.innerHTML = message;
      //If requirement not fulfilled, False will be returned, together with specified error message 
      return false;
    }

    //Requirement to ensure that email is valid
    if(email.indexOf("@") == -1){
        //Length should be longer than 6 characters
        if(email.length < 6){
            let message = "Please enter a correct email";
            message_error.innerHTML = message;
            //If requirements are not fulfilled, False will be returned, together with specified error message 
            return false;
        }
    }

    //Notes should include at least 20 characters
    if(notes.length <= 20){
      let message = "Please enter at least 20 characters in your notes";
      message_error.innerHTML = message;
    //If requirement not fulfilled, False will be returned, together with specified error message 
      return false;
    }

    //Message that will be printed once all requirements have been fulfilled
    let message = "Thank you for completing this form!";
    document.getElementById('wrapper').innerHTML = message;
    //Returning True, and a thank you message
    return true;
  }  
