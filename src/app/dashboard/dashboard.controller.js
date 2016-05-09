(function() {
  'use strict';

  angular
    .module('madBackWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $scope, $state, DashboardSrv) {
    DashboardSrv.getDashboardData().get()
    .$promise.then(
      function (response) {
        //第二排第三个图
        var chart_week_income = AmCharts.makeChart("mob-desktop", {
          "type": "serial",
          "theme": "light",
          "dataProvider": [ {
            "week": "Mon",
            "income": 2025
          }, {
            "week": "Tue",
            "income": 1882
          }, {
            "week": "Wed",
            "income": 1809
          }, {
            "week": "Thu",
            "income": 1322
          }, {
            "week": "Fri",
            "income": 1122
          }, {
            "week": "Sat",
            "income": 1114
          }, {
            "week": "Sun",
            "income": 984
          }],
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "income"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "week",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 0,
            "dashLength":0
          },
          "export": {
            "enabled": true
          }

        })

        //第二排第二个图
        var chart_top_rank = AmCharts.makeChart( "mobVsDesk", {
          "type": "pie",
          "theme": "light",
          "dataProvider": [ {
            "rank": "Top 1",
            "value": 9852
          }, {
            "rank": "Top 2",
            "value": 7899
          },{
            "rank": "Top 3",
            "value": 5899
          }  ],
          "titleField": "rank",
          "valueField": "value",
          "labelRadius": 5,

          "radius": "46%",
          "innerRadius": "60%",
          "labelText": "[[title]]",
          "export": {
            "enabled": true
          }
        } );

        //第二排第一个图
        var chart_week_delivery = AmCharts.makeChart("area-chart", {
          "type": "serial",
          "theme": "light",
          "marginRight": 30,
          "marginLeft": 50,
          "autoMarginOffset": 10,
          "mouseWheelZoomEnabled":true,
          // "dataDateFormat": "YYYY-MM-DD",
          "valueAxes": [{
            "id": "v1",
            "axisAlpha": 0,
            "position": "left",
            "ignoreAxisWidth":true
          }],
          "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
          },
          "graphs": [{
            "id": "g1",
            "balloon":{
              "drop":true,
              "adjustBorderColor":false,
              "color":"#ffffff"
            },
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "useLineColorForBulletBorder": true,

            "lineThickness": 2,
            "title": "red line",
            "valueField": "delivery",
            "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
          }],

          "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha":1,
            "cursorColor":"#258cbb",
            "limitToGraph":"g1",
            "valueLineAlpha":0.2
          },

          "categoryField": "week",
          "categoryAxis": {
            "dashLength": 1,
            "minorGridEnabled": true
          },
          "export": {
            "enabled": true
          },
          "dataProvider": [ {
            "week": "Mon",
            "delivery": 2025
          }, {
            "week": "Tue",
            "delivery": 1882
          }, {
            "week": "Wed",
            "delivery": 1809
          }, {
            "week": "Thu",
            "delivery": 1322
          }, {
            "week": "Fri",
            "delivery": 1122
          }, {
            "week": "Sat",
            "delivery": 1114
          }, {
            "week": "Sun",
            "delivery": 984
          }]
        });

        //第三排download图
        var chart = AmCharts.makeChart( "downloadChart", {
          "type": "serial",
          "theme": "default",
          "dataProvider": [ {
            "date": "3-6",
            "value": 2025
          }, {
            "date": "3-13",
            "value": 1882
          }, {
            "date": "3-20",
            "value": 1809
          }, {
            "date": "3-27",
            "value": 1322
          }, {
            "date": "4-3",
            "value": 1122
          }, {
            "date": "4-10",
            "value": 1114
          }, {
            "date": "4-13",
            "value": 584
          } ],
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "value"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "date",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 0
          },
          "export": {
            "enabled": true
          }

        } );



        chart_week_delivery.addListener("rendered", zoomChart);

        zoomChart();

        function zoomChart() {
          chart_week_delivery.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
        }

      },
      function (error) {
        console.log(error);
      }
    )

  }
})();
