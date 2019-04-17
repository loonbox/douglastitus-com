
//fade in the under construction div calling the fadeconstruction after a bit to fade out
$( document ).ready(function() {
  window.setTimeout(fadeConstruction, 5000);
});

function fadeConstruction(){
  $('.underConstruction').fadeOut(4000);
}

// modal get src of image so on click you can enlarge them
$('body').on('click','img',function(){
  var sr = $(this).attr("src");
  $('#mimg').attr('src',sr);
   $("#myModal").modal();

  })



  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });


  var url = 'https://script.google.com/macros/s/AKfycbyotNlVHxF02wgS2NNACqoq74BBcGvbfBEtFcCGIcKvXbZPPSrV/exec'
  $(document).on('click', '#submit-form', function (e) {
    e.preventDefault();
    var formData = $('#theForm').serializeArray();
    $('#contactModal').modal('hide');
    $('#theForm').trigger("reset");

    var jqxhr = $.ajax({
      url: url,
      method: "POST",
      dataType: "json",
      data: formData,
      success: function () {
              console.log("Hi how are you? ");
              }
         });

});



//for the login page
// var email = $("#inputEmail").val()
// var password = $("#inputPassword").val()
//
//   $('.login-button').click(function() {
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//   // ...
// });
//
// $('.logout').click(function() {
//   firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//   });
// });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     alert('logged in');
// } else {
//     console.log('not logged in');
// }
// });

  // });

  //
  // firebase.auth().signOut()
