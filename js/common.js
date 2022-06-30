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

    // rename project
    $('.renamebtn').click(function (e) {
        e.preventDefault();
        $(this).parents('.projectsgroup__listwrapper').find('.projrenamesect').addClass('show');
        $('.projsettlist').removeClass('show');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.projrenamesect ').length && !$target.closest('.renamebtn ').length) {
            $('.projrenamesect ').removeClass('show');
        }
    });

    // user menu (settings/logout..)
    $('.profilebox__avatar').click(function () {
        $('.profilebox__list').toggleClass('show');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.profilebox__avatar').length && !$target.closest('.profilebox__list ').length) {
            $('.profilebox__list').removeClass('show');
        }
    });

    // project ava color
    $('.imgbox').click(function () {
        $('.projcolors').not($(this).parents('.projectsgroup__listwrapper').find('.projcolors')).removeClass('show');
        $(this).parents('.projectsgroup__listwrapper').find('.projcolors').toggleClass('show');
        $('.projsettlist').removeClass('show');
    });

    $('.projcolors__color').click(function () {
        let colorProject = $(this).attr('data-color');
        $(this).parents('.projectsgroup__listwrapper').find('.projectsgroup__projbox .imgbox').css('background', colorProject);
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.projcolors').length && !$target.closest('.imgbox').length) {
            $('.projcolors').removeClass('show');
        }
    });

    // open project popup
    $('.sidebarprojbox').click(function () {
        $(this).find('.projinfo__btn').toggleClass('rotate');
        $(this).parent().next('.projectsgroup').toggleClass('show');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.position-relative').length) {
            $('.projectsgroup').removeClass('show');
            $('.projinfo__btn').removeClass('rotate');
        }
    });

    // select in modal


    if ($('body *').is('select')) {
        $('.custom-select.inmodal').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: -1,
            dropdownParent: $("#addpeople"),
        });
    }

    // team - role btn

    $('.teamroles span').click(function () {
        $(this).toggleClass('active');
        $(this).next('.teamroles__list').toggleClass('active');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.teamroles').length) {
            $('.teamroles span').removeClass('active');
            $('.teamroles__list').removeClass('active');
        }
    });


    // test

    $('.test').click(function () {
        var divList = $(".div");
        divList.sort(function (a, b) {
            return String.prototype.localeCompare.call($(a).data('name').toLowerCase(), $(b).data('name').toLowerCase());
        });
        $("#list-of-divs").html(divList);
    });













});