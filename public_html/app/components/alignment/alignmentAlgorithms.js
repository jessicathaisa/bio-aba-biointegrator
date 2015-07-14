
function clearTextQuery(){
    document.getElementById("txtQuery").value = "";
}
function clearFileQuery(){
    document.getElementById("filQuery").value = "";
}

angular.module('bioIntegrator').directive('fileUpload', function () {
    return {
        scope: true, //create a new scope
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0; i < files.length; i++) {
                    //emit event upward
                    scope.$emit("fileSelected", {file: files[i]});
                }
            });
        }
    };
});
