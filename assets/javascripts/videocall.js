(function(exports){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  var peer = new Peer(userId, {key: 'qvalqpxfa0grpb9', debug: 3});

  var createStream = function(callback){
    navigator.getUserMedia({audio: true, video: true}, function(stream){
      var video = $("<video>").attr('id', 'video');
      video.attr('src', URL.createObjectURL(stream));
      video.attr('autoplay', true);

      callback(stream);
    }, function(){});
  }

  peer.on('call', function(call){
    debugger;
    createStream(function(stream){
      call.answer(stream);
      receiveCall(call);
    });
  });

  var receiveCall = function(call){
    call.on('stream', function(stream){
      var video = $("<video>").attr('id', 'video');
      video.attr('autoplay', true);
      video.attr('src', URL.createObjectURL(stream));
      video.css({
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        bottom: '100%',
        backgroundColor: '#000'
      });
      $("body").append(video);
    });
  }

  var call = function(id){
    createStream(function(stream){
      var call = peer.call(id, stream);
      debugger;
      receiveCall(call);
    });
  }

  exports.call = call;
})(window);
