$(function () {
    newPalabra();

    $("#entrada").keyup(function () {
        var pal1 = $(this).val().toLowerCase();
        var pal2 = $("#valor").val().toLowerCase();

        if (pal1 == pal2) {
            $("#respuesta2").show();
            $("#respuesta1").hide();
            setTimeout(function () {
                newPalabra()
            }, 1000);
        } else {
            $("#respuesta1").show();
            $("#respuesta2").hide();
        }


        // console.log(pal1);
        // console.log(pal2);
    });

});

function newPalabra() {
    $("#respuesta1").hide();
    $("#respuesta2").hide();
    $("#entrada").val("");
    $.getJSON("js/data.json", function (json) {
        // console.log("data = ");
        // console.log(json);
        // console.log(Object.keys(json).length);
        var random = Math.floor(Math.random() * Object.keys(json).length);
        // console.log(random);
        var valor = Object.keys(json)[random];
        var abreviatura = Object.keys(json)[random];
        var valor = json[valor];
        $("#abreviatura").html(abreviatura);
        $("#valor").val(valor);

        // for (var clave in json) {
        //     if (json.hasOwnProperty(clave)) {
        //         if (clave == "AR") {
        //             // console.log("Lo encontré = " + json[clave]);
        //         }

        //     }
        // }
    });
}