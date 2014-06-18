var fixerAnsweredYes;

$(function() {
    var progressBar;
    var firstFixerChecked = false;
    $('#fix-button').click(function() {
        $('#action-buttons').fadeOut(function() {
            $('#progress-bar').fadeIn();
            progressBar = setInterval(function() {
                if(firstFixerChecked) return;
                $('#progress-bar').fadeOut(function() {
                    if(firstFixerChecked) return;
                    $('#progress-bar').fadeIn(function() {
                    });
                });
            }, 3500);
        });
    });

    // fixer = { name, id }
    fixerAnsweredYes = function(fixer) {
        firstFixerChecked = true;
        clearInterval(progressBar);
        $('#progress-bar').css({ display : 'none' });
        addPossibleFixer(fixer);
    }
    //TODO listen to fixer
    //     hide progress bar
    //     add fixer to list

    function addPossibleFixer(fixer) {
         var el = '<li class="list-group-item"><div class="col-md-2"><span class="glyphicon glyphicon-user" style="font-size: 25px;"></span><span style="margin-left: 25px;font-size: 39px;">'+fixer.name+'</span><span class="glyphicon glyphicon-star" style="font-size: 25px;margin-left: 20px;"></span>                   <span class="glyphicon glyphicon-star" style="font-size: 25px;"></span>                <span class="glyphicon glyphicon-star" style="font-size: 25px;"></span>                <span class="glyphicon glyphicon-star-empty" style="font-size: 25px;"></span><span class="glyphicon glyphicon-star-empty" style="font-size: 25px;"></span>            </div><div class="col-md-2" style="        margin-top: 15px;        "><div class="btn-group response-buttons" style="        width: 100%;        font-size: 34px;        "><button type="button" class="btn btn-default btn-success" style="        width: 100%;        ">Start a video chat</button></div></div></li>';
        $('#fixers-list ul').append(el);
        $('#fixers-list ul li').last().fadeIn();
    }
});