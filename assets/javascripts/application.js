(function(exports){
  var pusher = new Pusher('8645f2c92970d87ceaf1');
  var userId = $("[name='user-id']").attr('content');

  exports.pusher = pusher;
  exports.userId = userId;
})(window);
