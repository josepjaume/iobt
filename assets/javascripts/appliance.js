(function(){
  $(document).ready(function(){
    $("#break").on('click', function(){
      $.ajax({ url: '/broken' });
      return false;
    });
    $("#fix").on('click', function(){
      $.ajax({ url: '/fixed' });
      return false;
    });
  })
})();
