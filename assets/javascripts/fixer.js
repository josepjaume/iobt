(function(){
  var owner = pusher.subscribe('presence-owner');
  var channel = pusher.subscribe('presence-fixer');

  channel.bind('client-fix', function(data) {
    notifyFixRequest(data);
  });

  var notifyFixRequest = function(data){
    helpseekerAnsweredYes(data.user);

    $("#helpseekers-list ul li .btn-help-seeker").on('click', function(){
      if(!navigator.getUserMedia){
        alert("No video support");
        return;
      }
      data.user = user;
      owner.trigger('client-fix', data);
    });
  }
})();
