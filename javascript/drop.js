document.addEventListener('DOMContentLoaded', function() {
    var dropdownTriggers = document.querySelectorAll('.right li .drop a');

    dropdownTriggers.forEach(function(trigger) {
        var dropMenu = trigger.nextElementSibling;

        trigger.addEventListener('mouseover', function(event) {
            dropMenu.style.display = 'block';
        });

        trigger.addEventListener('mouseout', function(event) {
            dropMenu.style.display = 'none';
        });

        // 当鼠标移出下拉菜单时也隐藏
        dropMenu.addEventListener('mouseover', function(event) {
            dropMenu.style.display = 'block';
        });

        dropMenu.addEventListener('mouseout', function(event) {
            dropMenu.style.display = 'none';
        });
    });
});