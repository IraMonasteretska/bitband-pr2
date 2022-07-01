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

    $('.custom-select.inmodal2').select2({
        placeholder: "Select a state",
        minimumResultsForSearch: -1,
        dropdownParent: $("#taskmodal"),
    });





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


    // sortbyname
    $('.sortbyname').click(function () {
        sortTable(0)
    });


    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc";
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }


    // OPAN TASK
    $('.toggleopentask').click(function () {
        $(this).toggleClass('rotate');
        $('.taskmodal__content').toggleClass('big');
        $('.taskmodal__details').toggleClass('hide');
    });

    $('.taskrole__selected').click(function () {
        $('.taskrole__selected').not($(this)).removeClass('active');
        $('.taskrole__userlist').not($(this).next('.taskrole__userlist')).hide();

        $(this).toggleClass('active');
        $(this).next('.taskrole__userlist').toggle();
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.taskrole').length) {
            $('.taskrole__selected').removeClass('active');
            $('.taskrole__userlist').hide();
        }
    });


});