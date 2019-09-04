function getPath() {
    return window.location.protocol + "//" + window.location.host + "/VotoElectronico/";
    //return window.location.protocol + "//" + window.location.host + "/";
};

var Status = {
    Warning: -2,
    Error: -1,
    Empty: 0,
    Success: 1,
    Waiting: 2,
};

function ShowNotification(o) {
    //   $.gritter.add({ title: o.title, text: o.message, class_name: o.type });

    var icono = "";
    //switch (o.type) {
    //    //Exit
    //    case "success": icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/check.png";
    //        break;
    //    //Error
    //    case "error": icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/no-check.png";
    //        break;
    //    //Warning
    //    case "warning": icono = getPath() + "/Scripts/MountainNotifications/img/Leopard/warning2.png";
    //}

    if (typeof (o.message) !== "undefined") {
        //titulo = titulo || "Notificación";
        timeout = 5000;
        $.mpSmallBox({
            title: o.title || "Notificación",
            content: o.message,
            img: icono,
            closeonclick: false,
            timeout: timeout,
            animation: "fadeInDown fast",
            notificationbar: false
        });
    }
}

function blockUI(Msg) {
    $.blockUI({
        message: null 
        //message: Msg || "Cargando datos....",
        //css: {
        //    //left: '37%',
        //    textAlign: 'center',
        //    cursor: 'wait',
        //    //width: '350px',
        //    //top: '50%',
        //    //right: '10px',
        //    //border: 'none',
        //    padding: '10px',
        //    opacity: 0.7,
        //    color: '#fff',
            //backgroundColor: '#000',
            //'-webkit-border-radius': '10px',
            //'-moz-border-radius': '10px',
            //'border-radius': '10px'
       // },
        //centerY: true,
        //fadeIn: 0,
        //fadeOut: 0
    });
}

function unblockUI() {
    $.unblockUI();
}

