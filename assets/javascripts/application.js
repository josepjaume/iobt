(function(exports){
  var pusher = new Pusher('8645f2c92970d87ceaf1');
  var userId = $("[name='user-id']").attr('content');
  var userName = $("[name='user-name']").attr('content');

  exports.pusher = pusher;

  exports.user = {
    id: userId,
    name: userName
  };

  var channel = pusher.subscribe('presence-all');
  channel.bind('fixed', function(data) {
    document.location.href = "/images/unicorn.gif";
  });
})(window);
