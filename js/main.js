const API = 'http://localhost:3000';

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
<<<<<<< HEAD
})


function submitBabe() {

    $("#cid").val("1");

    console.log($("#cid"));
    

    $.ajax({
        url: API + '/customer/' + $("#cid").val() + "/babe/",
        type: 'POST',
        data: JSON.stringify({
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            address: $("#address").val(),
            locations: [$("#locations1").val(), $("#locations2").val(), $("#locations3").val()]
        }),
        async: true,
        contentType: "application/json",
        success: function() {
            console.log("success");
        },
        error: function(status, error) {
            console.log('Something went wrong: ', status, error);
        }
    })

}
=======
    
})


$(window).resize(function () {
    /*
    if ($(document).width() < 992) {
        $("#wrapper").toggleClass("toggled");
    }*/
});
>>>>>>> 7e8fffe0b17e568be77bc99293367c4bd0c7749e
