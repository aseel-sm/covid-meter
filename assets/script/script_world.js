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

      var active1=new Array();
      var recover1=new Array();
      var death1=new Array();
      var datas1;
      fetch('https://covidapi.info/api/v1/global/count')
      .then((resp) => resp.json())
        .then( function (count) {
         // console.log(count.result);
      var array=new Array();
      var jk=count.result;
      array=Object.getOwnPropertyNames(count.result)
    //  console.log(jk[array[9]].confirmed)      
           
       
    
      var c=Object.keys(jk).length;
      for(i=0;i<c;i++){

        recover1[i]=new Object();
        death1[i]=new Object();
    active1[i]=new Object();
    var nil=array[i];
        nil=Date.parse(nil);
    active1[i]['x']=nil;
   
      active1[i]['y']=jk[array[i]].confirmed;

      recover1[i]['x']=nil;
      recover1[i]['y']=jk[array[i]].recovered;
      death1[i]['x']=nil;
      death1[i]['y']=jk[array[i]].deaths;

      }
        var options3 = {
      series: [{
       name:"Confirmed",
      data: active1

    },{ name:"Recovered",
       data: recover1},{ 
        name:"Death", 
        data: death1}],
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
      
      labels: {
        minWidth: 30,
        tickAmount: 10
      }
    },
    xaxis: {
      labels:{
    
   
  },
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

    var chart = new ApexCharts(document.querySelector("#chart-line_w"), options3);
    chart.render();
  

    })

 
            var active=new Array();
            var place=new Array();
            var recover=new Array();
            var death=new Array();
            
           fetch("https://covidapi.info/api/v1/global")
        .then((resp) => resp.json())
          .then( function (gloabal) {
             var pie=new Array(3);
           p=gloabal.result;
            pie[0]=p.confirmed-(p.deaths+p.recovered);
            pie[1]=p.recovered;
            pie[2]=p.deaths;
           
          
            var jk=pie[0]+pie[1]+pie[2];
            for(i=0;i<3;i++)
              {
                pie[i]=(pie[i]/jk)*100
                pie[i] = pie[i].toFixed(1);;
              }
        
          
          var options2 = {
          series: pie,
          chart: {
          height: 390,
          type: 'radialBar',
        },
        title: {
    text: 'Covid-19 Current Status-World(Click on bar)',
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

        var chart = new ApexCharts(document.querySelector("#chart2_w"), options2);
        chart.render();
      })



