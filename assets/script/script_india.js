 window.Promise ||
        document.write(
          '<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"><\/script>'
        )
      window.Promise ||
        document.write(
          '<script src="https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js"><\/script>'
        )
      window.Promise ||
        document.write(
          '<script src="https://cdn.jsdelivr.net/npm/findindex_polyfill_mdn"><\/script>'
        )






      var active2=new Array();
      var recover2=new Array();
      var death2=new Array();
      var datas1_;
     fetch('https://api.rootnet.in/covid19-in/stats/history')
  .then((resp) => resp.json())
    .then( function (history) {
       
      datas1_=history.data;
      var c=Object.keys(datas1_).length;
      for(i=0;i<c;i++){

        recover2[i]=new Object();
        death2[i]=new Object();
    active2[i]=new Object();
    var nil2=datas1_[i].day;
        nil2=Date.parse(nil2);
    active2[i]['x']=nil2;
      active2[i]['y']=datas1_[i].summary.total;

      recover2[i]['x']=nil2;
      recover2[i]['y']=datas1_[i].summary.discharged;
      death2[i]['x']=nil2;
      death2[i]['y']=datas1_[i].summary.deaths;

      }
        var options3 = {
      series: [{
       name:"Confirmed",
      data: active2

    },{ name:"Recovered",
       data: recover2},{ 
        name:"Death", 
        data: death2}],
      chart: {
      id: 'fb',
      group: 'social',
      type: 'line',
      height: 500,
      dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },

    toolbar: {
      show: true
    }
    },
    title: {
    text: 'Covid-19 Timeline',
    align: 'left'
  },
    colors: ['#ffa600','#15ff00','#ff0000'],
    yaxis: {
      
      forceNiceScale: true,
     
      labels: {
        minWidth: 40,
        tickAmount: 5
      }
    },
    xaxis: {
     
    type: 'datetime',
    min: new Date('10 Mar 2020').getTime(),
    format: 'dd-MMM-yyyy',
  },
  stroke: {
curve: 'straight'
},
toolbar: {
tools: {
  selection: false
}
},
markers: {
size: 6,
hover: {
  size: 10
}
},
tooltip: {
followCursor: false,
theme: 'dark',
x: {
  show: false
},
marker: {
  show: false
},
y: {
 
}
}
    };

    var chart = new ApexCharts(document.querySelector("#chart-line_ind"), options3);
    chart.render();
  

    })

 
            var active=new Array();
            var place6=new Array();
            var recover=new Array();
            var death=new Array();
            var datasp;
           fetch("https://api.rootnet.in/covid19-in/stats/latest")
        .then((resp) => resp.json())
          .then( function (latest) {
             var pie=new Array(3);
            datasp=latest.data.regional;
            var p=latest.data.summary;
            var c=Object.keys(datasp).length;
            pie[0]=p.total-(p.deaths+p.discharged);
            pie[1]=p.discharged;
            pie[2]=p.deaths;
            for(i=0;i<c;i++){

              place6[i]=datasp[i].loc;         
          
             
            recover[i]=datasp[i].discharged;
           
            death[i]=datasp[i].deaths;
            active[i]=datasp[i].confirmedCasesIndian+datasp[i].confirmedCasesForeign-(recover[i]+death[i]);
          
            }
           
            var jk=pie[0]+pie[1]+pie[2];
            for(i=0;i<3;i++)
              {
                pie[i]=(pie[i]/jk)*100
                pie[i] = pie[i].toFixed(1);;
              }
          
        var options = {
        
          series: [{
          name: 'Active',
          data: active
        }, {
          name: 'Recovered',
          data: recover
        }, {
          name: 'Death',
          data: death
        } ]
        ,
          chart: {
          type: 'bar',
          height: 800,
          stacked: true,


        },
        plotOptions: {
          bar: {
           // distributed:true,
            horizontal: true,
            
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'State wise Status',
          align: 'left'
        },
        fill:{
          color:['red','orange','green']
        },
        xaxis: {
          categories: place6,
          labels: {
            formatter: function (val) {
              return val             
            }
            ,  
          }
        },
        yaxis: {
          
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart_i"), options);
        chart.render();
          
          var options2 = {
          series: pie,
          chart: {
          height: 390,
          type: 'radialBar',
        },
        title: {
    text: 'Covid-19 Current Status-India(Click on bar)',
    align: 'left'
  },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 360,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: true,
              },
              value: {
                show: true,
              }
            }
          }
        },
        colors: ['#ff9500', '#31b302', '#ff0000'],
        labels: ['Active', 'Recovered', 'Death'],
        legend: {
          show: false,
          floating: true,
          fontSize: '15px',
          position: 'bottom',
          offsetX: 1,
          offsetY: -11,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart2_i"), options2);
        chart.render();
      })



