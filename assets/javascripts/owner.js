(function(){
  var channel = pusher.subscribe('presence-owner');
  var fixer = pusher.subscribe('presence-fixer');

  $(function(){
    $("#owner-interface").css('opacity', 0);
  });

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
    $("#owner-interface").animate({opacity: '1'});

    $("#find-fixer").on('click', function(){
      data.user = user;
      fixer.trigger('client-fix', data);
    });
  }

  var notifyRequestAccepted = function(data){
    fixerAnsweredYes(data.user);

    $(".list-group-item").on('click', function(){
      call(data.user.id);
    });
  }
})();
