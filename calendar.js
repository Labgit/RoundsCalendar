$(function () {

    var d = new Date();
    build(d.getFullYear(), d.getMonth(), d.getDate());

    $('.calendar-next').on('click', function () {
        page(true);
    });

    $('.calendar-previous').on('click', function () {
        page(false);
    });

    function page(isForward) {
        var direction = isForward ? 1 : -1;

        var year = $('.calendar-parent').data('year');
        var month = $('.calendar-parent').data('month');
        var day = $('.calendar-parent').data('day');

        var d = new Date(year, month, day);
        d.setMonth(d.getMonth() + direction);

        console.log(year);
        console.log(month);
        console.log(day);
        console.log(d);

        build(d.getFullYear(), d.getMonth(), d.getDate());
    }

    // month is looking for 0 to 11
    function build(year, month, day) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        //console.log('year: ' + year);
        //console.log('month: ' + month);
        //console.log('day:' + day);

        var date = new Date(year, month, day);

        $('.calendar-parent').data('year', year);
        $('.calendar-parent').data('month', month);
        $('.calendar-parent').data('day', day);

        var $titles = $('.calendar-title');
        var $weeks = $('.calendar-week');
        var $calendars = $('.calendar');

        $titles.each(function (index, title) {
            let nextMonth = new Date(date);
            nextMonth.setMonth(nextMonth.getMonth() + index);

            let header = months[nextMonth.getMonth()] + " " + nextMonth.getFullYear();
            $(title).html(header);
        });

        $calendars.each(function (index, calendar) {
            var $times = $(calendar).find('time');

            var nextDay = new Date(year, month + index, 1);
            nextDay.setDate(1 - nextDay.getDay());
            $times.each(function (index, time) {
                $(time).html(nextDay.getDate());
                nextDay.setDate(nextDay.getDate() + 1);
            });
        });
    }
});


