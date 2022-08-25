jQuery({ Counter: 0 }).animate({ Counter: $('.onlinecource').text() }, {
duration: 1000,
easing: 'swing',
step: function () {
$('.onlinecource').text(Math.ceil(this.Counter));
}
});
jQuery({ Counter: 0 }).animate({ Counter: $('.articls').text() }, {
duration: 1000,
easing: 'swing',
step: function () {
$('.articls').text(Math.ceil(this.Counter));
}
});
jQuery({ Counter: 0 }).animate({ Counter: $('.userrs').text() }, {
duration: 1000,
easing: 'swing',
step: function () {
$('.userrs').text(Math.ceil(this.Counter));
}
});

jQuery({ Counter: 0 }).animate({ Counter: $('.coments').text() }, {
duration: 1000,
easing: 'swing',
step: function () {
$('.coments').text(Math.ceil(this.Counter));
}
});
