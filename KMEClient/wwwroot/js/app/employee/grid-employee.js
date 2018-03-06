(function () {
    var gridEmployee = (function () {
        var grid;

        var initalDom = function () {
            grid = $("#grid");
        };

        var initialDataSource = [
            { Name: "Irwan Saifranto Rahmat", Email: "irwansaifranto93@gmail.com", BirthPlace: "Ambon", BirthDate: "1993-05-21T00:00:00", Gender: "Male", Phone: "087822692165", Status: "Single", Address: "Jl. Kebonbibit Barat 01. No. 02", JoinDate: "2018-03-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Ghina Gustantiana", Email: "Ghinagustantiana@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-03-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Joko Susilo", Email: "Jokosusilo@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-03-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Aliando Syahputra", Email: "Aliandosyarief@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-01-21T00:00:00", ActiveStatus: "Inactive" },
            { Name: "Alfabet Thinking1", Email: "Alfabetthinking1@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-02-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Alfabet Thinking2", Email: "Alfabetthinking2@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-03-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Alfabet Thinking3", Email: "Alfabetthinking3@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-04-21T00:00:00", ActiveStatus: "Inactive" },
            { Name: "Alfabet Thinking4", Email: "Alfabetthinking4@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-05-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Alfabet Thinking5", Email: "Alfabetthinking5@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2017-03-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Alfabet Thinking6", Email: "Alfabetthinking6@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2017-03-21T00:00:00", ActiveStatus: "Inactive" },
            { Name: "Alfabet Thinking7", Email: "Alfabetthinking7@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2017-03-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Alfabet Thinking8", Email: "Alfabetthinking8@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2017-03-21T00:00:00", ActiveStatus: "Inactive" },
            { Name: "Alfabet Thinking9", Email: "Alfabetthinking9@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2016-03-21T00:00:00", ActiveStatus: "Active" },
            { Name: "Alfabet Thinking10", Email: "Alfabetthinking10@gmail.com", BirthPlace: "Ciamis", BirthDate: "1995-08-01T00:00:00", Gender: "Female", Phone: "087189657309", Status: "Single", Address: "Jl. Kebonkopi No. 02", JoinDate: "2018-03-21T00:00:00", ActiveStatus: "Active" }
        ];

        var editItem = function () {
            alert("tes");
        };

        var detailItem = function () {
            alert("tes2");
        };

        var deleteItem = function () {
            swal({
                title: "Change Status",
                text: "Your Staus will be change !",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes, Change it!",
                animation: true,
                closeOnConfirm: false
            }, function () {
                swal("Changed!", "Your status Changed.", "success");
            });
        };

        var initialGrid = function () {
            grid.kendoGrid({
                dataSource: {
                    data: initialDataSource,
                    schema: {
                        model: {
                            fields: {
                                Name: { type: "string" },
                                JoinDate: { type: "date" },
                                BirthPlace: { type: "string" },
                                BirthDate: { type: "date" },
                            }
                        }
                    },
                    pageSize: 10
                },
                sortable: true,
                filterable: true,
                resizable: true,
                scrollable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true
                },
                columns: [
                    {
                        command: [
                            {
                                name: "detail",
                                text: "Detail",
                                click: detailItem,
                                imageClass: "fa fa-plus-square",
                                template: '<a class="k-button-icon #=className# k-grid-custom" #=attr# href="\\#"><span class="#=imageClass# action-grid-employee" title="Detail Employee"></span></a>'
                            },
                            {
                                name: "changeStatus",
                                text: "Change Status",
                                click: deleteItem,
                                imageClass: "fa fa-cog",
                                template: '<a class="k-button-icon #=className# k-grid-custom" #=attr# href="\\#"><span class="#=imageClass# action-grid-employee" title="Change Status"></span></a>'
                            },
                            {
                                name: "edit",
                                text: "Edit",
                                click: editItem,
                                imageClass: "fa fa-edit",
                                template: '<a class="k-button-icon #=className# k-grid-custom" #=attr# href="\\#"><span class="#=imageClass# action-grid-employee" title="Edit Employee"></span></a>'
                            }
                        ],
                        width: 80,
                        headerAttributes: { style: "text-align:center" },
                        attributes: { class: "text-center" }
                    },
                    {
                        field: "Name",
                        title: "Name",
                        width: 170,
                        filterable: {
                            extra: false
                        }
                    },
                    {
                        field: "JoinDate",
                        title: "Join Date",
                        template: "#= kendo.toString(JoinDate, 'MMMM dd, yyyy') #",
                        width: 120,
                        filterable: {
                            extra: false
                        }
                    },
                    {
                        field: "Email",
                        title: "Email",
                        width: 200,
                        filterable: {
                            extra: false
                        }
                    },
                    {
                        field: "Phone",
                        title: "Phone Number",
                        width: 120,
                        filterable: {
                            extra: false
                        }
                    },
                    {
                        field: "ActiveStatus",
                        title: "Status",
                        template: '# if (ActiveStatus == "Active") { # <div class="d-flex"><span class="u-tags-v1 text-center g-width-130 g-brd-around g-brd-teal-v2 g-bg-teal-v2 g-color-white g-rounded-50 g-py-4 g-px-15">#= ActiveStatus # </span></div> # } else { # <div class="d-flex"><span class="u-tags-v1 text-center g-width-130 g-brd-around g-brd-lightbrown g-bg-lightbrown g-color-white g-rounded-50 g-py-4 g-px-15">#= ActiveStatus # </span></div> # } #',
                        width: 100,
                        filterable: {
                            extra: false
                        }
                    }
                ]
            });
        };

        var initialTooltip = function () {
            grid.kendoTooltip({
                filter: ".action-grid-employee"
            }).data("kendoTooltip");
        };

        var run = function () {
            initalDom();
            initialGrid();
            initialTooltip();
        };

        return {
            run: run
        };
    })();

    gridEmployee.run();
}());



