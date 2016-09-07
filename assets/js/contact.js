// Avoiding exposing email
var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'me' + '@' + 'brunogtavares' + '.' + 'com');

function empty() {
  var name, email, message;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;

  if (name == "" || email == "" || messgae == "") {
    $('alert').alert('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>contact field <strong>cannot be blank</strong></span></div>');
    return false;
  }
}
