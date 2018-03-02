(function () {
    var gridEmployee = (function () {
        var grid;

        var initalDom = function () {
            grid = $("#grid");
        };

        var initialGrid = function () {
            grid.kendoGrid({
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                    },
                    pageSize: 20
                },
                height: 550,
                sortable: true,
                filterable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                columns: [{
                    field: "ContactName",
                    title: "Contact Name",
                    width: 240
                }, {
                    field: "ContactTitle",
                    title: "Contact Title"
                }, {
                    field: "CompanyName",
                    title: "Company Name"
                }, {
                    field: "Country",
                    width: 150
                }]
            });
        };

        var run = function () {
            initalDom();
            initialGrid();
        };

        return {
            run: run
        };
    })();

    gridEmployee.run();
}());



