(function(){
  var channel = pusher.subscribe('owner');

  channel.bind('broken', function(data) {
    notifyBroken(data);
  });

  var notifyBroken = function(data){
    $("body").append("<div>Broken!</div>");
  }
})();
