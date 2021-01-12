

function validateForm() {
    var myForm = document.forms["myForm"]["fname"].value;
    if (myForm == "") {
      alert("Name must be filled out");
      return false;
    }
  }