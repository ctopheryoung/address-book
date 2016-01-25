function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var addedFirstName = $("input#new-first-name").val();
    var addedLastName = $("input#new-last-name").val();
    var newContacts = new Contact(addedFirstName, addedLastName);

    $("ul#contacts").append("<li><span class='contact'>") + newContacts.fullName() + ("</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  })
})
