$(document).ready(function () {
    // SIGN UP - visibility password


    $('.togglepass').click(function () {
        if ($(this).parent().find('input').attr('type') == "password") {
            $(this).parent().find('input').attr("type", "text");
        } else {
            $(this).parent().find('input').attr("type", "password");
        }

        $(this).toggleClass('active');
    });


    // Project Board

    $('.togglebutton').click(function () {
        $('.boardsidebar').toggleClass('hide');
        $('.boardrightsect').toggleClass('enlarged');
    });


    // selects
    if ($('body *').is('select')) {
        $('.custom-select').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: -1,
        });
    }

    // sidebar project settmenu
    $('.projectsgroup__projbox .botsbtn').click(function () {
        $('.projsettlist').not($(this).parents('.projectsgroup__listwrapper').find('.projsettlist')).removeClass('show');
        $(this).parents('.projectsgroup__listwrapper').find('.projsettlist').toggleClass('show');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.projectsgroup').length) {
            $('.projsettlist').removeClass('show');
        }

    });



});