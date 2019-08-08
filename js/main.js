$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


function startPage(customer) {
    $('#Profile-Avatar').attr({ src: customer.pic })
}

$( document ).ready(function () {
    $("#wrapper").toggleClass("toggled");
   $.ajax({
        url: 'http://192.168.248.16:3000/customer/1',
        type: 'GET',
        success: function (res) {
            startPage(res);
        }
    })
})