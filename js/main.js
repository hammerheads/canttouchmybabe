$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


function startPage(customer) {
    $('#username').html(customer.firstName);
    $('#Profile-Avatar').attr({ src: customer.pic });
}

$(document).ready(function () {
    $.ajax({
        url: 'http://192.168.248.16:3000/customer/1',
        type: 'GET',
        success: function (res) {
            startPage(res);
        }
    })
    
})


$(window).resize(function () {
    /*
    if ($(document).width() < 992) {
        $("#wrapper").toggleClass("toggled");
    }*/
});