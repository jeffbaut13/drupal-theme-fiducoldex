$('.collapseTwo').draggable({
  axis: 'x',
  drag: function(event, ui) {
    var left = ui.position.left,
        offsetWidth = ($(this).width() - $(this).parent().width()) * -1;

    if (left > 0) {
      ui.position.left = 0;
    }
    if (offsetWidth > left) {
      ui.position.left = offsetWidth;
    }
  }
});
