'use strict';
var frmLogeo = function () {

    var frm = {
        init_validate: function () {
            init_validate({
                form: "#idRegistro",
                rules: {
                    sNombreUsuario: {
                        required: true,
                        minlength: 6,
                        number: true
                     
                    },
                    sContraseña: {
                        required: true,
                        minlength: 6
                    }
                },
                messages: {
                    sNombreUsuario: {
                        required: "Ingrese Usuario.",
                        minlength: "Usuario debe tener minimo 6 caracteres.",
                        number: "Ingrese solo Numeros"
                    },
                    sContraseña: {
                        required: "Ingrese Contraseña",
                        minlength: "La Contraseña debe tener minimo 6 caracteres."
                    }
                }
            });
        }
    };

    var even = {
        inn: function () {
            $("#btnLogin").click(function () {
                frm.init_validate();
                //if ($("#idRegistro").valid())
                //{
                //   var  data = {
                //        sNombreUsuario: $("#txtNombreUsuario").val(),
                //        sContraseña: $("txtContraseña").val()
                //    };
                //}

            });
        }

        //ingresar: function () {
        //    var _bn = $(this);
        //}

    };
    var inn = function () {
        even.inn();
       frm.init_validate();
    };
    return {
        inn: inn
    };


}();
$(function () {
    frmLogeo.inn();
});
