// Avoiding exposing email
var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'me' + '@' + 'brunogtavares' + '.' + 'com');
