

// modal get src of image so on click you can enlarge them
$('body').on('click','img',function(){
  var sr = $(this).attr("src");
  $('#mimg').attr('src',sr);
   $("#myModal").modal();

  })



  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

//main contact form
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

//wedding contact form

var url = 'https://script.google.com/macros/s/AKfycbye-L5sYXvy83VWLW66aIue0BMttzQxoyCb-Ixy4Vdc036uTWYf/exec'
$(document).on('click', '#wedding-submit-form', function (e) {
  e.preventDefault();
  var formData = $('#theForm').serializeArray();
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
