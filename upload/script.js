function processFile(e) {
    var file = e.target.result,
        results;
    if (file && file.length) {
        results = file;
        $('body').append(results);
    }
}
$(function () {
    var fileInput = $('.fileInput');
    fileInput.change(function () {
        if (!window.FileReader) {
            alert('Your browser is not supported');
            return false;
        }
        var input = fileInput.get(0);
        var reader = new FileReader();
        var textFile = input.files[0];
        textFile.extension = textFile.name.split('.')[textFile.name.split('.').length - 1];
        if (textFile.extension == 'aps') {
            // Read the file
            reader.readAsText(textFile);
            // When it's loaded, process it
            $(reader).on('load', processFile);
        }
    });
})
