var helpseekerAnsweredYes;

$(function() {
    var progressBar;
    var firstHelpseekerChecked = false;
    $('#fix-button').click(function() {
        $('#action-buttons').fadeOut(function() {
            $('#progress-bar').fadeIn();
            progressBar = setInterval(function() {
                if(firstHelpseekerChecked) return;
                $('#progress-bar').fadeOut(function() {
                    if(firstHelpseekerChecked) return;
                    $('#progress-bar').fadeIn(function() {
                    });
                });
            }, 3500);
        });
    });

    // helpseeker = { name, id }
    helpseekerAnsweredYes = function(helpseeker) {
        firstHelpseekerChecked = true;
        clearInterval(progressBar);
        $('#progress-bar').css({ display : 'none' });
        addPossibleHelpseeker(helpseeker);
    }


    function addPossibleHelpseeker(helpseeker, callback) {
        var el = '<li class="list-group-item">							<div class="row">								<div class="col-md-12" style="															  text-align: center;															  "><span class="glyphicon glyphicon-user" style="font-size: 25px;"></span><span style="margin-left: 25px;font-size: 27px;">Josep needs help with his printer</span>                                </div>							</div>							<div class="row">								<div class="col-md-12" style="        margin-top: 15px;        "><div class="btn-group response-buttons" style="        width: 100%;        font-size: 34px;        "><button type="button" class="btn btn-success btn-help-seeker" style="        width: 50%;        ">Help Josep</button><button type="button" class="btn btn-danger btn-dont-help-seeker" style="        width: 50%;        ">Sorry, I can\'t</button></div></div></div></li>';
        $('#helpseekers-list ul').append(el);
        $("#action-buttons").fadeOut();
        var $el = $('#helpseekers-list ul li').last();
        $el.fadeIn(function() {
            $el.find('.btn-help-seeker').click(function() {
                $el.find('.row').last().html('<div clas="col-md-12" style="text-align: center;">Thanks, Josep will come back to you</div>')
                //TODO send notification to server => Accept
            });
            $el.find('.btn-dont-help-seeker').click(function() {
                $el.fadeOut();
            });
        });

    }
});