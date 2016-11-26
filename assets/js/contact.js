$(document).ready(function() {
  $("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var contact = $("#contact").vacl();
    $("#returnmessage").empty();
    if (name == '' || email == '' || contact == '') {
      alert("Please Fill Required Fields");
    } else {
      // Avoiding exposing email
      var contactform =  document.getElementById('contactform');
          contactform.setAttribute('action', '//formspree.io/' + 'me' + '@' + 'brunogtavares' + '.' + 'com');
      $("form").append("<div class=\"hidden\">
        <input type='hidden' name='_next' value=\"{{ \"/thankyou.html\" | prepend: site.baseurl }}\">
      </div>");
    }
  });
});
