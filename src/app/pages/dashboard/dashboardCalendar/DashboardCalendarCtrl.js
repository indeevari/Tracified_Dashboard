
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-03-08',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2017-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Long Event',
          start: '2017-03-07',
          end: '2017-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Dinner',
          start: '2017-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2017-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();