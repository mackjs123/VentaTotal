//$(function () {
//    $("#btnGuardar").click(function () {

//    var data = {
//            //iCodUsuario: 1,
//            sNombreUsuario: $("#sNombreUsuario").val(),
//            sApellido: $("#sApellido").val(),
//            sDireccion: $("#sDireccion").val(),
//            sTelefono: $("#sTelefono").val(),
//            sDni: $("#sDni").val(),
//            sContraseña: $("#sContraseña").val(),
//            dFechaNacimiento: $("#dFechaNacimiento").val()
//        };
//        /***'@Url.Action("RegistrarUsuario","UsuarioController")'; */
//        var url = '@Url.Action("RegistrarUsuario","/Controllers/UsuarioController")';
//        $.post(url, data).done(function (data) {
//            console.log(data);
//        }).fail(manejoErrorAjax).always(function () { });
//    });




//    function manejoErrorAjax(err) {
//        console.log(err)
//    }

//})


'use strict';
var frmIndex = function () {

    //var formulario = document.frmMantenedor,
    //    elementos = formulario.elements;


    ////focus blur
    //var focusInput = function () {
    //    this.parentElement.children[1].className = "label active";
    //    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    //};

    //var blurInput = function () {
    //    if (this.value <= 0) {
    //        this.parentElement.children[1].className = "label";
    //        this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    //    }
    //};

    //for (var i = 0; i < elementos.length; i++)
    //{
    //    if (elementos[i].type == "text" || elementos[i].type == "password")
    //    {
    //        elementos[i].addEventListener("focus", focusInput);
    //        elementos[i].addEventListener("blur", blurInput);
    //    }
    //}

    var frm = {
        init_validate: function () {
            init_validate({
                form: "#frmMantenedor",
                rules: {
                    sNombreUsuario: {
                        required:true,
                        minlength: 6,
                        maxlength: 100
                    },
                    sApellido: {
                        required: true,
                        minlength: 6,
                        maxlength: 100
                    },
                    sDireccion: {
                        required: true,
                        minlength: 6,
                        maxlength: 100
                    },
                    sTelefono: {
                        required: true,
                        digits: true,
                        minlength: 6,
                        maxlength: 9
                    },
                    sDni: {
                        required: true,
                        digits: true,
                        minlength: 8,
                        maxlength: 8
                    },
                    sContraseña: {
                        required: true,
                        minlength: 6,
                        maxlength:15
                    },
                    dFechaNacimiento: { required: true },
                    sPerfil: {
                        required: true
                    }
                },
                messages: {
                    sNombreUsuario: {
                        required: "Ingrese su Nombre",
                        minlength: "Debe tener minimo 5 caracteres"
                    },
                    sContraseña: {
                        required: "Ingrese una Contraseña",
                        minlength: "Debe tener minimo 5 caracteres"
                    },
                    sApellido: {
                        required: "Ingrese su Apellido",
                        minlength: "Debe tener minimo 5 caracteres",
                        //equalTo: "Please enter the same password as above"
                    },
                    sDireccion: {
                        required: "Ingrese su Direccion",
                        minlength: "Debe tener minimo 5 caracteres"
                    },
                    sDni: {
                        required: "Ingrese su Dni",
                        digits: "Ingrese solo numeros",
                        minlength: "Dni debe contar de 8 Digitos"

                    },
                    sTelefono: {
                        required: "Ingrese Telefono",
                        digits: "Ingrese solo numeros",
                        minlength: "Telefono minimo de 6 digitos"
                    },
                    dFechaNacimiento: "Ingrese Fecha Nacimiento",
                    sPerfil: "Seleccione Perfil"
                }
            });
        },
        limpiar: function () {
            $("#sNombreUsuario").val("");
            $("#sApellido").val("");
            $("#txtNombre").val("");
            $("#sDireccion").val("");
            $("#sTelefono").val("");
            $("#sDni").val("");
            $("#sContraseña").val("");
            $('input[name=sPerfil]').attr('checked', false);
            //$("input[id=cbxAdministrador]").attr("checked", false);
            //$("input[id=cbxInvitado]").attr("checked", false);
            //$("input[type=radio]:checked").val();
            $("#frmMantenedor").validate().resetForm();
            $("#frmMantenedor").find(".form-group.has-error").removeClass("has-error");
        }
    };

    var events = {
        init: function () {
            $("#btnGuardar").click(events.guardar);
            //$("#btnGuardar").click(function () {
            //    frm.limpiar();
            //})
        },
        guardar: function () {
            var _btn = $(this);
            if ($("#frmMantenedor").valid())
            {
                _btn.attr("disabled", "disabled");
                blockUI("Guardando Datos...");
                
                $.ajax({
                    type: 'post',
                    url: '/Usuario/RegistrarUsuario',    /* '@Url.Action("RegistrarUsuario")',*/
                    data: {
                        sNombreUsuario: $("#sNombreUsuario").val(),
                        sApellido: $("#sApellido").val(),
                        sDireccion: $("#sDireccion").val(),
                        sTelefono: $("#sTelefono").val(),
                        sDni: $("#sDni").val(),
                        sContraseña: $("#sContraseña").val(),
                        dFechaNacimiento: $("#dFechaNacimiento").val(),
                        //sPerfil: $("#cbxInvitado").val()
                        sPerfil: $("input:radio[name=sPerfil]:checked").val()
                    },
                  
                    success: function (result) {
                        _btn.removeAttr("disabled");
                        unblockUI();
                        if (result.status !== undefined) {
                            switch (result.status)
                            {
                                case Status.Error:
                                    ShowNotification({ title: 'Error!', message: result.message, type: 'error' });
                                    alert("El usuario ya existe");
                                    break;
                                case Status.Success:
                                    ShowNotification({ title: 'Correcto!', message: result.message, type: 'success' });
                                    events.cargar_tabla();
                                    alert("Se registro el Usuario Correctamente");
                                 
                                    //$("#idSeccion").modal("hide");
                                    break;
                            }
                        }
                    },
                    error: function (result) {
                        _btn.removeAttr("disabled");
                        unblockUI();
                    },
            
                });
                frm.limpiar();
            }
     
        }
    };
    var init = function () {
        events.init();
        frm.init_validate();
    };
    return {
        init: init,
        //cargar_tabla: events.cargar_tabla,
        //editar: events.editar,
        //eliminar: events.eliminar
    };


}();
$(function () {
    frmIndex.init();
    //fnIndex.cargar_tabla();             
});