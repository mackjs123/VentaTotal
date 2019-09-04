'use strict';

(function ($) {
    'use strict';
    var datatableInit = function () {
        var $table = $('.datatable-default');
        var table = $table.DataTable({
            paginationType: 'full_numbers',
            processing: fnload(),
            destroy: true,
            language: { "sUrl": getPath() + "Scripts/spanish-config.txt" },
            aLengthMenu: [[5, 10, 20, 25, 50], [5, 10, 20, 25, 50]],
            pageLength: $table.attr("data-pageLength") != undefined ? parseInt($table.attr("data-pageLength")) : 5,
            columnDefs: [
                { "sClass": "rownumber", "aTargets": ["rownumber"] },
                { "sClass": "codigo", "aTargets": ["codigo"] },
                { "sClass": "nroidentidad", "aTargets": ["nroidentidad"] },
                { "sClass": "estado", "aTargets": ["estado"] },
                { "sClass": "centrado-minimo", "aTargets": ["centrado-minimo"] },
                { "sClass": "accion", "aTargets": ["accion"] },
                { "sClass": "money", "aTargets": ["money"] }
            ],
            drawCallback: function (oSettings) {
                fnstop();
                $("#datatable-tabletools_filter").removeClass("dataTables_filter");
                $table.removeClass("hidden");
                $("ul.pagination").addClass("pagination-sm")
                $('.dataTables_filter input').off();
                $('.dataTables_filter input').on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        table.search(this.value).draw();
                        return;
                    }
                    if (e.keyCode == 8 && $(this).val().length == 0) {
                        table.search(this.value).draw();
                    }
                });
            }
        });
    };
    $(function () {
        datatableInit();
    });
}).apply(this, [jQuery]);

(function ($) {
    'use strict';
    var datatableInit = function () {
        var $table = $('.datatable-default-nosearch');
        $table.dataTable({
            paginationType: 'full_numbers',
            serverSide: false,
            lengthChange: false,
            searching: false,
            paginate: false,
            info: false,
            bAutoWidth: true,
            processing: true,
            language: { "sUrl": getPath() + "Scripts/spanish-config.txt" },
            aLengthMenu: [[5, 10, 20], [5, 10, 20]],
            columnDefs: [
                { "sClass": "rownumber", "aTargets": ["rownumber"] },
                { "sClass": "codigo", "aTargets": ["codigo"] },
                { "sClass": "nroidentidad", "aTargets": ["nroidentidad"] },
                { "sClass": "estado", "aTargets": ["estado"] },
                { "sClass": "centrado-minimo", "aTargets": ["centrado-minimo"] },
                { "sClass": "accion", "aTargets": ["accion"] },
                { "sClass": "money", "aTargets": ["money"] }
            ],
            drawCallback: function (oSettings) {
                $table.removeClass("hidden");
                $("ul.pagination").addClass("pagination-sm")
                $('.dataTables_filter input').off();
                $('.dataTables_filter input').on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        table.search(this.value).draw();
                        return;
                    }
                    if (e.keyCode == 8 && $(this).val().length == 0) {
                        table.search(this.value).draw();
                    }
                });
            }
        });
    };
    $(function () {
        datatableInit();
    });
}).apply(this, [jQuery]);

function LoadDataTableServer() {
    var o = arguments.length > 0 ? arguments[0] : null;
    var $table = $(o.object);
    if (o != null) {
        var table = $(o.object).DataTable({
            processing: fnload(),
            serverSide: o.server == true,
            destroy: true,
            language: { "sUrl": getPath() + "Scripts/spanish-config.txt" },
            lengthChange: true,
            searching: false,
            paginate: !o.paginate,
            info: !o.nosearch,
            paginationType: "full_numbers",
            aLengthMenu: [[5, 10, 20, 50, 100, 200, 500], [5, 10, 20, 50, 100, 200, 500]],
            pageLength: $table.attr("data-pageLength") != undefined ? parseInt($table.attr("data-pageLength")) : 10,
            ajax: { url: getPath() + o.url, type: 'post', async: (o.async != undefined) ? o.async : true, data: (o.params != undefined) ? o.params : {} },
            columnDefs: [
                { "sClass": "rownumber", "aTargets": ["rownumber"] },
                { "sClass": "codigo", "aTargets": ["codigo"] },
                { "sClass": "nroidentidad", "aTargets": ["nroidentidad"] },
                { "sClass": "estado", "aTargets": ["estado"] },
                { "sClass": "centrado-minimo", "aTargets": ["centrado-minimo"] },
                { "sClass": "accion", "aTargets": ["accion"] },
                { "sClass": "money", "aTargets": ["money"] }
            ],
            columns: o.data,
            //"dom": 'Brt<"bottom"iflp><"clear">',
            buttons: [
                'excel', 'pdf', 'print'
            ],
            drawCallback: function (oSettings) {
                $('[data-toggle=tooltip]').tooltip();
                fnstop();
                $("ul.pagination").addClass("pagination-sm")
                $(o.object + '_filter input').off();
                $(o.object + '_filter input').on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        table.search(this.value).draw();
                        return;
                    }
                    if (e.keyCode == 8 && $(this).val().length == 0) {
                        table.search(this.value).draw();
                    }
                });

            }
        });

        return table;
    }
}

function LoadDataTableEmpty(id) {
    return $(id).DataTable({
        destroy: true,
        lengthChange: false,
        searching: false,
        paginate: false,
        info: false,
        language: { "sUrl": getPath() + "Scripts/spanish-config.txt" },
        columnDefs: [
            { "sClass": "rownumber", "aTargets": ["rownumber"] },
            { "sClass": "codigo", "aTargets": ["codigo"] },
            { "sClass": "nroidentidad", "aTargets": ["nroidentidad"] },
            { "sClass": "estado", "aTargets": ["estado"] },
            { "sClass": "centrado-minimo", "aTargets": ["centrado-minimo"] },
            { "sClass": "accion", "aTargets": ["accion"] },
            { "sClass": "dt-left", "aTargets": ["dt-left"] }
        ],
    });
}

function LoadDataTableDefault(id) {
    var $table = $(id);
    var table = $table.DataTable({
        paginationType: 'full_numbers',
        processing: fnload(),
        destroy: true,
        language: { "sUrl": getPath() + "Scripts/spanish-config.txt" },
        aLengthMenu: [[5, 10, 20, 25, 50], [5, 10, 20, 25, 50]],
        pageLength: $table.attr("data-pageLength") != undefined ? parseInt($table.attr("data-pageLength")) : 5,
        columnDefs: [
            { "sClass": "rownumber", "aTargets": ["rownumber"] },
            { "sClass": "codigo", "aTargets": ["codigo"] },
            { "sClass": "nroidentidad", "aTargets": ["nroidentidad"] },
            { "sClass": "estado", "aTargets": ["estado"] },
            { "sClass": "centrado-minimo", "aTargets": ["centrado-minimo"] },
            { "sClass": "accion", "aTargets": ["accion"] },
            { "sClass": "money", "aTargets": ["money"] }
        ],
        drawCallback: function (oSettings) {
            $('[data-toggle=tooltip]').tooltip();
            fnstop();
            $("ul.pagination").addClass("pagination-sm")
            $(id + '_filter input').off();
            $(id + '_filter input').on('keyup', function (e) {
                if (e.keyCode == 13) {
                    table.search(this.value).draw();
                    return;
                }
                if (e.keyCode == 8 && $(this).val().length == 0) {
                    table.search(this.value).draw();
                }
            });
        }
    });
    return table;
}

function fnload() {
    $('.bloqueo-gif').removeClass('hidden');
}

function fnstop() {
    $('.bloqueo-gif').addClass('hidden');
}