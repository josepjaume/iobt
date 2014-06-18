(function(){
  var channel = pusher.subscribe('presence-owner');
  var fixer = pusher.subscribe('presence-fixer');

  channel.bind('broken', function(data) {
    notifyBroken(data);
  });

  channel.bind('client-fix', function(data){
    notifyRequestAccepted(data);
  });

  var notificationFor = function(appliance){
    return $("[data-appliance='" + appliance + "']");
  }

  var optionsFor = function(appliance){
    return $('.options', notificationFor(appliance));
  }

  var notifyBroken = function(data){
    var accept = $("<a href='#'>").html("Fix").on('click', function(){
      optionsFor(data.appliance).html("Notifying...");
      fixer.trigger('client-fix', data);
      return false;
    });

    var reject = $("<a href='#'>").html("Reject").on('click', function(){
      return false;
    });

    var notification = $("<li>" + data.appliance + " broken!</li>");
    var options = $("<span class='options'></span>");
    options.append(accept).append(reject);
    notification.append(options);
    notification.attr('data-appliance', data.appliance);

    $("#notifications").append(notification);
  }

  var notifyRequestAccepted = function(data){
    var notification = notificationFor(data.appliance);
    var videoCall = $("<a href='#'>").html("Video Call");
    videoCall.on('click', function(){
      call(data.userId);
    });
    $(".options", notification).html(videoCall);
  }
})();
