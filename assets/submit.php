<?php
// if the url field is empty
if(isset($_POSt['url']) && $_POST['url'] == ''){

  $myemail = 'me@brunogtavares.com'

  $body = "This is the email that came from your website:
  name: $_POST[name]
  E-mail: $_POST[email]
  Message: $_POST[message]";


  if($_POST["message"] == "" || $_POST["name"] == ""){
    echo "<div class="alert alert-danger" role="alert">
           Please make sure you fill <strong> all </strong> the fields.
         </div>"
  } else {
    if( $_POST['email'] && !preg_match("/[\r\n]/", $_POST['email'])) {
      $headers = "From: $_POST[email]";
    } else {
      $headers = "From: $email"
    }
    // then send the form to your email
    mail($myemail, 'Contact Form', print_r($_POST,true) );
  }

}
// otherwise, let the spammer think that they got their message through
?>
