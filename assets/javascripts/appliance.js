(function(){
  $(document).ready(function(){
    $("#break").on('click', function(){
      $.ajax({
        url: '/broken'
      });
      return false;
    });
  })
})();
