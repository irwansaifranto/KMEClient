var generateDom = (function () {
    /**
     *
     * @param {string} placementId initial id for attributes DOM
     * @param {string} heading modal header name
     * @param {any} formContent content in modal body
     */
    var initiateBootstrapModal = function (placementId, heading, formContent) {
        html = '<div id="' + placementId + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
        html += '<div class="modal-dialog modal-lg">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<h4>' + heading + '</h4>';
        html += '<a class="close" data-dismiss="modal">×</a>';
        html += '</div>';
        html += '<div class="modal-body">';
        html += formContent;
        html += '</div>';
        html += '<div class="modal-footer">';
        html += '<button type="button" class="btn btn-primary">Save</button>'
        html += '<span class="btn btn-default" data-dismiss="modal">Close</span>';
        html += '</div>';  // content
        html += '</div>';  // dialog
        html += '</div>';  // footer
        html += '</div>';  // modalWindow
        $('body').append(html);

        //$("#" + placementId).on('hidden.bs.modal', function (e) {
        //    $(this).remove();
        //});
    };

    return {
        modal: initiateBootstrapModal
    }
})();

generateDom.modal();




