$('document').ready(function () {

    /*****************
     ***Toogle Picker**
     ******************/
    $('#picker li a').click(function () {
        var ch = $(this).attr('data-color');
//        console.log(ch);
        changeColor(ch);
    });

    /************************
     ***Toggle Primary Color**
     *************************/
    $('.picker-toggle').click(function () {
        $('.color-picker').toggleClass('hide-picker');
    });

    /************************************
     ***Load page color**
     *************************************/
    if (getCookie("color") == ""){
        changeColor("cyan");
    } else {
        changeColor(getCookie("color"));
    }


    /*******************
     ***Color Switcher**
     ******************/

    function changeColor(ch) {
        var color = {
            orange: "rgb(255,61,0)",
            pink: "rgb(233, 30, 99)",
            cyan: "rgb(0, 150, 136)",
            green: "rgb(76, 175, 80)",
            blue: "rgb(33, 150, 243)"
        };
        $('style.dynamic-style').html(".primary-color{color: " + color[ch] + "!important;}.primary-background{background-color: " + color[ch] + " !important;}nav>ul>li>a:hover{color:" + color[ch] + "!important;}");
        setCookie("color", ch, 365);
    }
});


/* ********************************
** Functions to set and get Cookies
**********************************/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
