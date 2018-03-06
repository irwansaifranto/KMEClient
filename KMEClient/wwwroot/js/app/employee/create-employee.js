(function () {
    var createEmployee = function () {
        var btnCreate, myModal, myContent, apiEndpoint;

        var initiateDom = function () {
            btnCreate = $(".btn-new-employee");
            myModal = $("#myModal");
            myContent = $("#mdl-employee-form");
            apiEndpoint = "/Employee/Create";
        };

        var initiateDatePickerBirthDate = function () {
            $("#datepicker-birth-date").kendoDatePicker();
        };

        var initiateDatePickerJoinDate = function () {
            $("#datepicker-join-date").kendoDatePicker();
        };

        var showPopup = function () {
            myModal.modal({ backdrop: 'static', keyboard: false }).show();
            initiateDatePickerBirthDate();
            initiateDatePickerJoinDate();
        };

        var addEmployee = function () {         
            btnCreate.click(function () {
                $.ajax({
                    type: "GET",
                    url: apiEndpoint,
                    cache: false,
                    success: function (data, status, xhr) {
                        myContent.html(data);
                        showPopup();
                    },
                    error: function (data, status, xhr) {
                        alert("Something worse happen !!");
                    }
                });
            });
        };

        var run = function () {
            initiateDom();
            addEmployee();
        };

        return {
            run: run
        };
    }();
    createEmployee.run();
}());