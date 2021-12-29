function pollBlockFunc()
{
    var elms = document.getElementsByClassName('overflow-hidden feed-shared-poll feed-shared-update-v2__content')
    for (var i = 0; i < elms.length; i++) {
        elms[i].setAttribute("hidden", "true");
    }
    console.log("Another Poll Blocked!");
}

var t=setInterval(pollBlockFunc, 500);
