(function(){
  var owner = pusher.subscribe('presence-owner');
  var channel = pusher.subscribe('presence-fixer');

  channel.bind('client-fix', function(data) {
    notifyFixRequest(data);
  });

  var notifyFixRequest = function(data){
    var accept = $("<a href='#'>").html("Accept").on('click', function(){
      data.userId = userId;
      owner.trigger('client-fix', data);
      return false;
    });

    var reject = $("<a href='#'>").html("Reject").on('click', function(){
      owner.trigger('client-fix', data);
      return false;
    });

    var notification = $("<li>" + data.appliance + " needs to be fixed</li>");
    notification.append(accept).append(reject);

    $("#notifications").append(notification);
  }
})();
