$(function () {
    var colors = [
        '#5eb95e',
        '#18bc9c',
        '#1f8dd6',
        'rgb(128, 88, 165)',
        '#dd514c',
        'rgb(243, 123, 29)'
    ];
    var i = Math.floor(Math.random() * 6);
    $('body').css('background-color', colors[i]);
})