(function(){
  var owner = pusher.subscribe('presence-owner');
  var channel = pusher.subscribe('presence-fixer');

  channel.bind('client-fix', function(data) {
    notifyFixRequest(data);
  });

  var notifyFixRequest = function(data){
    helpseekerAnsweredYes(data.user);

    $("#helpseekers-list ul li .btn-help-seeker").on('click', function(){
      data.user = user;
      owner.trigger('client-fix', data);
    });
  }
})();
