
$.extend(jQuery.validator.messages, {
    required: "El campo es obligatorio.",
    remote: "El campo es obligatorio.",
    email: "Ingrese un email válido.",
    url: "Ingrese una url válida.",
    date: "Ingrese una fecha válida.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Ingrese solo números.",
    digits: "Ingrese solo dígitos.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Ingresa el mismo valor.",
    accept: "Please enter a value with a valid extension.",
    maxlength: $.validator.format("Ingrese máximo {0} caracteres."),
    minlength: $.validator.format("Ingrese mínimo {0} caracteres."),
    rangelength: $.validator.format("Ingrese cadena entre {0} y {1} caracteres."),
    range: $.validator.format("Ingrese cadena entre {0} y {1}."),
    max: $.validator.format("Máximo valor de la propiedad {0}."),
    min: $.validator.format("Mínimo valor de la propiedad {0}."),
    fecharango: $.validator.format("Fecha de Fin debe ser mayor a la Fecha de Inico."),
    letras: $.validator.format("Solo se permiten letras."),
    horarango: $.validator.format("La Hora de fin debe ser mayor que la hora de inicio.")
});

$.validator.addMethod("letras", function (value, element) {
    return this.optional(element) || /^[a-zA-Zzáéíóúñ, " "]+$/i.test(value);
});

$.validator.addMethod("fecharango", function (value, element, arg) {
    if (value == undefined || value == '' || value == null) return true;
    var _fi = $(arg[0]).val().split('/');
    var _ff = value.split('/');
    var _finicio = _fi[2] + '-' + _fi[1] + '-' + _fi[0];
    var _ffin = _ff[2] + '-' + _ff[1] + '-' + _ff[0];
    return Date.parse(_finicio) < Date.parse(_ffin);
});
$.validator.addMethod("horarango", function (value, element, arg) {
    if (value == undefined || value == '' || value == null) return true;
    var i = ConvertTo24Hours($(arg[0]).val());
    var f = ConvertTo24Hours(value);
    return i < f;
});

function init_validate(o) {
    $(o.form).validate({
        rules: o.rules,
        messages: o.messages,
        errorPlacement: function (error, element) {
            if ($(element).is(":radio")) {
                error.insertBefore($(element).closest(".radio"));
            }
            else if ($(element).is(":checkbox")) {
                error.insertBefore($(element).closest(".radio"));
            }
            else {
                error.insertAfter($(element));
            }
            //switch (element) {
            //    case element.is("radio") === 'performance':

            //        break;
            //    case element.attr("name") === 'location':
            //        error.insertAfter($("#location"));
            //        break;
            //    case element.attr("name") === 'date':
            //        error.insertAfter($("#date"));
            //        break;
            //    case element.attr("name") === 'time':
            //        error.insertAfter($("#time"));
            //        break;
            //    case element.attr("name") === 'guests':
            //        error.insertAfter($("#guests"));
            //        break;
            //    case element.attr("name") === 'price':
            //        error.insertAfter($("#price"));
            //        break;
            //    default: error.insertAfter($(element));
            //        //nothing
            //}
        },
        highlight: function (label) {
            $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (label) {
            $(label).closest('.form-group').removeClass('has-error');
        },
        success: function (label) {
            $(label).closest('.form-group').removeClass('has-error');
            label.remove();
        }
    })
}

function clearValidate(obj) {
    $(obj).closest('.form-group').removeClass('has-error');
    $(obj).next("label").remove();
}