$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


function startPage(customer) {
    $('#Profile-Avatar').attr({ src: customer.pic })
}

$( document ).ready(function () {
    $("#wrapper").toggleClass("toggled");
   /* $.ajax({
        url: 'http://192.168.248.16:3000/customer/1',
        type: 'GET',
        success: function (res) {
            startPage(res);
        }
    })*/
    startPage(JSON.parse('{"id":1,"firstName":"Robin","lastName":"Le Lapin","email":"chonco@slavs.com","phone":"967263998","babes":[{"firstName":"Pipa","lastName":"Pitucha","email":"test@test.com","id":1,"tracking":false},{"firstName":"Cat","lastName":"Pitucha","email":"test@test.com","id":2,"tracking":false}],"pic":"https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg"}'))
})