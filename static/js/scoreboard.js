function downloadKarmaData(callback) {
    $.ajax({
        url: '/getkarma',
        dataType: 'json',
    })
    .done(callback);
}


