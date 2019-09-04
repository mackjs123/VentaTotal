var Notificacion = function () {
    return {
        Mensaje: function (mensaje, titulo, tipo, cerrarPorClick) {
            var icono = "";
            switch (tipo) {
                //Exit
                case 1: icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/check.png";
                    break;
                //Error
                //case 2: icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/no-check.png";
                case -1: icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/no-check.png";
                    break;
                //Warning
                case -2: icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/no-check.png";
                //case 3: icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/warning2.png";
            }

            if (typeof (mensaje) != "undefined") {
                titulo = titulo || "Notificación";
                timeout = 5000;
                cerrarPorClick = cerrarPorClick || false;

                $.mpSmallBox({
                    title: titulo,
                    content: mensaje,
                    img: icono,
                    closeonclick: cerrarPorClick,
                    timeout: timeout,
                    animation: "fadeInDown fast",
                    notificationbar: false
                });
            }
        },
        Confirmacion: function (callbackAccept, callbackCancel, titulo, mensaje, icono) {
            titulo = titulo || "¡Advertencia!";
            mensaje = mensaje || "¿Desea Continuar?";
            var icon = icono || "trashcan.png";

            $.mpMessageBox({
                withheader: false,
                width: "460px",
                title: titulo,
                //content: mensaje,
                content: '',
                img: getPath() + "/Scripts/MountainNotifications/img/Leopard/" + icon,
                draggable: false,
                //buttons: "[Aceptar][Cancelar]",
                buttons: "[Si][No]",
                notificationbar: false,
                animation: "bounceIn"
            }, function (buttonPress) {
                if (buttonPress == "Si") {
                    if (callbackAccept != null)
                        Notificacion.Wait(callbackAccept, 0.5);
                } else if (buttonPress == "No") {
                    if (callbackCancel != null)
                        Notificacion.Wait(callbackCancel, 0.5);
                }
            });
        },
        Wait: function (callback, seconds) {
            return setTimeout(callback, seconds * 1000);
        },
        Mensaje2: function (type, message, title, confirm, callback) {
            var _title, _type, _message;
            switch (type) {
                case Status.Success:
                    _title = "¡Correcto!";
                    _type = "success";
                    break;
                case Status.Error:
                    _title = "¡Error!";
                    _type = "error";
                    break;
                case Status.Warning:
                    _title = "¡Advertencia!";
                    _type = "warning";
                    break;
                case Status.Forbidden:
                    _title = "¡Acceso Denegado!";
                    _type = "error";
                    break;
                case Status.Info:
                    _title = "¡Infomación!";
                    _type = "info";
                    break;
            }
            _title = title || _title;
            _message = message.replace(/\r\n/g, "<br/>");
            if (confirm || type === Status.Error) {
                swal({
                    title: _title,
                    type: _type,
                    html: _message,
                    showConfirmButton: true,
                    showCancelButton: false,
                    //timer: 3000
                }).then((result) => {
                    if (callback)
                        callback();
                });
            } else {
                swal({
                    title: _title,
                    type: _type,
                    html: _message,
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 3000
                }).then((result) => {
                });
            }
        }
    };
}();