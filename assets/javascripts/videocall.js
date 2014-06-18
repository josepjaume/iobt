(function(exports){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  var peer = new Peer(user.id, {key: 'qvalqpxfa0grpb9', debug: 3});

  var createStream = function(callback){
    navigator.getUserMedia({audio: true, video: true}, function(stream){
      var video = $("<video>").attr('id', 'video');
      video.attr('src', URL.createObjectURL(stream));
      video.attr('autoplay', true);

      callback(stream);
    }, function(){});
  }

  peer.on('call', function(call){
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
        height: '100%',
        backgroundColor: '#000',
        zIndex: '100'
      });
      $("body").append(video);
    });
  }

  var call = function(id){
    createStream(function(stream){
      var call = peer.call(id, stream);
      receiveCall(call);
    });
  }

  exports.call = call;
})(window);
