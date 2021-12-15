function changeimg(a,b){
var id;
  if(a==1)
  id='ind';
else
  id='ind1';
var k=document.getElementById(id);
if(b==1)
k.src='assets/image/india.png';
else
k.src='assets/image/india2.png';

}

function data_view(i,j){
  var dt,mb,cb;
  if(j==0)
  {
    dt='dtb';
    mb='mbw';
    cb='cbw';
  }
  if(j==1)
  {
    dt='dtbi';
    mb='mbi';
    cb='cbi';
  }

  var types=['dtb','mbv','cbw','dtbi','mbi','cbi'];
  if(i==1)
  { 
    document.getElementById(dt).style.display='block';
 
    document.getElementById(mb).style.display='none';
    document.getElementById(cb).style.display='none';
   
  }
  if(i==2)
  {
    document.getElementById(dt).style.display='none';
    document.getElementById(mb).style.display='none';
    document.getElementById(cb).style.display='block';
      }
  if(i==3)
  {
    document.getElementById(dt).style.display='none';
    document.getElementById(mb).style.display='block';
    document.getElementById(cb).style.display='none';
     }



                  }    

    var place = document.getElementById('place');
    var ch_active=document.getElementById('ch_active');
    var ch_rec=document.getElementById('ch_rec');
    var ch_dead= document.getElementById('ch_dead');

   
    var ch_active_i=document.getElementById('ch_active_i');
    var ch_rec_i=document.getElementById('ch_rec_i');
    var ch_dead_i= document.getElementById('ch_dead_i');
    
    var r_place = document.getElementById('r_place');
    var r_active=document.getElementById('r_active');
    var r_rec=document.getElementById('r_rec');
    var r_dead= document.getElementById('r_dead');
    var status=0;
    const spinner = document.getElementById("spinner")
    var plc;
     var act;
     var rec;
     var dead;
    var w_access;
     let datas;
     let access;
     let access_2;
     var count;
     var srt_key=new Array;
     //var icon=document.getElementById('in_btn');
     document.getElementById('in_btn').addEventListener("onmouseover",function(){
      document.getElementById('ind').src="india.png";});
      //var map_w=[[],[]];

   function dataSupply(status){
    if(status==1)
    {    spinner.removeAttribute('hidden');
        fetch('https://corona-api.com/countries')
        .then((resp) => resp.json()) // Transform the data into json
          .then( function (countries) {

              datas=countries;
              access=datas.data;           
             count=Object.keys(datas.data).length;
           //  console.log(count);
             var ch_w=new Array(0,0,0);
             var time=access[0].updated_at;
             time=new Date(time);
            time= time.toLocaleString();
             
             document.getElementById('wld_s').innerHTML='Updated At:'+time;
          
            var k=1;
              var map_w=new Array();
              map_w[0]=new Array(2);
              map_w[0][0]='Country';
              //map_w[0][1]='Name';
              map_w[0][1]='Confrimed';
              map_w[0][2]='Death';
             // map_w[0][3]='Deaths';
              var flag=0;
                for(i=0;i<count;i++){
                  srt_key[i]=access[i].latest_data.confirmed;           
                  
                }
              
              var key=new Array();
              
              key=findKey(srt_key) ;  
              //console.log(key)    
            
              for(let j=0;j<count;j++){
                map_w[k]=new Array(2);
               i=key[j];
             map_w[k][0]=new Array(1);
              map_w[k][0]['v']=access[i].code;
         //     console.log(access[i].name)
              map_w[k][0]['f']= access[i].name;
                         plc=access[i].name;
               
              map_w[k][1]=act=access[i].latest_data.confirmed;
            //  map_w[k][2]= 
            map_w[k][2]=  dead=access[i].latest_data.deaths;
                rec=access[i].latest_data.recovered;
               n_case=access[i].today.confirmed;
               n_death=access[i].today.deaths;
               ch_w[0]+=act;
               ch_w[1]+=rec;
               ch_w[2]+=dead;
               
           if(act==0)
                continue;
                if(flag==1 &&plc=='Afghanistan')
                  continue;
              //  act=act-(rec+dead);
             rowPrint(status,plc,act,rec,dead,n_case,n_death);
              if(plc=='Afghanistan')
                flag=1;
             k++;

               
            }

         document.getElementById('active__w').innerHTML=ch_w[0]-(ch_w[1]+ch_w[2])+' active cases';
            console.log(ch_w[1]);
    ch_active.innerHTML=ch_w[0];
    ch_rec.innerHTML=ch_w[1];
    ch_dead.innerHTML=ch_w[2];

        
   google.charts.load('current', {
      'packages':['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable(map_w);

      var options = {
       
      };
      options['width'] = '900'
      options['height']= '500'
      options['colorAxis']={minValue: 0,  colors: ['#f29696', '#c90404']}
      options['keepAspectRatio']=false
     options['tooltip']= {isHtml: true}
     options['enableRegionInteractivity']=true;
   //  options['magnifyingGlass']={enable: true, zoomFactor: 1}
      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
     
    
     




      chart.draw(data, options);
    }
    




    spinner.setAttribute('hidden', '');
  })   

    
    }
    if(status==2){
      spinner.removeAttribute('hidden');
        fetch('https://api.rootnet.in/covid19-in/stats/latest')
          .then((resp) => resp.json()) // Transform the data into json
            .then( function (latest) {

                datas=latest;
                access=datas.data.regional;
                access_2=datas.data.summary;
                var time=latest.lastRefreshed;
                time=new Date(time);
                time=time.toLocaleString()
                document.getElementById('ind_s').innerHTML='Updated At:'+time;
              //  document.write.getElementById('active__i').innerHTML=   
   var rr=     ch_active_i.innerHTML=access_2.total;
    var ff=    ch_rec_i.innerHTML=access_2.discharged;
    var dd=    ch_dead_i.innerHTML=access_2.deaths;
        document.getElementById('active__i').innerHTML=   rr-(ff+dd)+ ' active cases';
                count=Object.keys(datas.data.regional).length;
              
             var srt_key=new Array;
              var val;
             for(i=0;i<count;i++){
              val=access[i].confirmedCasesIndian+access[i].confirmedCasesForeign;
              srt_key[i]=val          
             }
           
           var key=new Array();
           key=findKey(srt_key) ; 
      
       var kerala;
      for(i=0;i<count;i++)
      {
          if(access[i].loc=="Kerala")
            kerala=i;

      }
     active_k=access[kerala].confirmedCasesIndian+access[kerala].confirmedCasesForeign;
     rowPrint(status,access[kerala].loc,active_k,access[kerala].discharged,access[kerala].deaths);

       for(j=0;j<count;j++){
          i=key[j];
          
        active=access[i].confirmedCasesIndian+access[i].confirmedCasesForeign;
       
        plc=access[i].loc;
        act=active;
        dead=access[i].deaths;
        rec=access[i].discharged;
        if(plc=="Kerala")    
        continue;
        rowPrint(status,plc,act,rec,dead,0,0);
    }                  
    spinner.setAttribute('hidden', '');
  }
    
    )
   }
  if(status==5){
    var whole,data;
    spinner.removeAttribute('hidden');
    fetch('http://newsapi.org/v2/top-headlines?sources=google-news-in&q=corona&apiKey=e587c49d0ce24ed7b7c319e1a932854e',
    )
        .then((resp) =>  whole=resp.json())
        .then(function(whole){
          data=whole.articles;
                var count=Object.keys(data).length;

               //alert(data[0].title);
             var h,d,l,s,img,c;
              for(i=0;i<count;i++){
                  h=data[i].title;
                  d=data[i].description;
                  c=data[i].content;
                  l=data[i].url;
                  img=data[i].urlToImage;
                  s=data[i].source.name;
                  if(s==("Youtube.com"||"youtube"))
                    continue;
                  getNews(h,d,l,img,c);
              }
              spinner.setAttribute('hidden', '');

        }) 
    fetch('http://newsapi.org/v2/top-headlines?country=in&category=health&q=corona&apiKey=e587c49d0ce24ed7b7c319e1a932854e',
    )
        .then((resp) =>  whole=resp.json())
        .then(function(whole){
          data=whole.articles;
                var count=Object.keys(data).length;

               //alert(data[0].title);
             var h,d,l,s,img,c;
              for(i=0;i<count;i++){
                  h=data[i].title;
                  d=data[i].description;
                  c=data[i].content;
                  l=data[i].url;
                  img=data[i].urlToImage;
                  s=data[i].source.name;
                  if(s==("Youtube.com"||"youtube"))
                    continue;
                  getNews(h,d,l,img,c);
              }
              spinner.setAttribute('hidden', '');

        })   
      /*   */   
   }
  }


    
function findKey(srt_key) {
  var key=new Array();
  var maxi;
  for (i = 0; i < count; i++) {
    
    maxi = srt_key.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

    key[i] = maxi;
    srt_key[maxi] = null;
  }
  return key;
}

function rowPrint(status,p,a,r,d,nc,nd) {
    var tbody="tablebody";
    
    if(status==2)
    tbody="tablebody_i";

    var thead=document.getElementById(tbody);
    var tr=document.createElement('tr');
    tr.className='table_row';
   var td_p=document.createElement('td');
   var td_a=document.createElement('td');
   var td_r=document.createElement('td');
   var td_d=document.createElement('td');
  var td_t=document.createElement('td');
  var td_nc=document.createElement('td');
  var td_nd=document.createElement('td');
   
    thead.appendChild(tr);
    //for(i=0;i<4;i++)
    tr.appendChild(td_p);
  tr.appendChild(td_a);
  tr.appendChild(td_r);
   if(tbody=="tablebody"){
    tr.appendChild(td_nc);
    tr.appendChild(td_nd); 
  }
 tr.appendChild(td_d);
 tr.appendChild(td_t);

    td_p.appendChild(document.createTextNode(p));
    td_a.appendChild(document.createTextNode(a));
    td_r.appendChild(document.createTextNode(r));
    if(tbody=="tablebody"){
      td_nc.appendChild(document.createTextNode(nc));
      td_nd.appendChild(document.createTextNode(nd));}

          td_d.appendChild(document.createTextNode(d));
         
    td_t.appendChild(document.createTextNode(a-(r+d)));
       
  }
    
    
    
    
    
    var chart_count_i=new Array();
 function world() {
   data_view(1,0);
    document.getElementById('world').style.display="block";
    document.getElementById('india').style.display="none";
    document.getElementById('about').style.display="none";
    document.getElementById('info').style.display="none";
    document.getElementById('news').style.display="none";       
    status=1;
    
        place.innerHTML = "Country";     
        dataSupply(status);
     
       
      

                border();
        
    }



function india() {
        data_view(1,1);
        status=2;
        dataSupply(status);
        document.getElementById('india').style.display="block"
        document.getElementById('world').style.display="none";
        document.getElementById('about').style.display="none";
        document.getElementById('info').style.display="none";
        document.getElementById('news').style.display="none";
       // alert(access[].loc)
     //rowPrint(status,234,2342,234,234)  ;
     
      
       border();
    
    }    
     
 function info(){
        status=3;
        document.getElementById('india').style.display="none";
        document.getElementById('world').style.display="none";
        document.getElementById('about').style.display="none";
        document.getElementById('info').style.display="block";
        document.getElementById('news').style.display="none";
        border();
        
       }
 function about(){
           status=4;
           document.getElementById('india').style.display="none"
        document.getElementById('world').style.display="none";
    document.getElementById('about').style.display="block";
    document.getElementById('info').style.display="none";
    border();
    
       }
      

function getNews(h,d,l,img_s,c){
  var news_content=document.getElementById('news_content');
  var box=document.createElement('div');
  var news_h=document.createElement('h1');
  var news_d=document.createElement('p');
  var span_src=document.createElement('span');
  var img=document.createElement('img');
  img.className='news_img';
  span=document.createElement('span');
  var link=document.createElement('a');
  box.className="news_box";
  news_h.className="news_head";
 // data.className="news_data";
  //span_src.className="news_src"
  news_content.appendChild(box);
  box.appendChild(img);
  box.appendChild(news_h);
  box.appendChild(news_d);
  box.appendChild(link);
  var data=document.createElement('div');
  data.className="news_data";
  news_h.appendChild(span_src);
  //news_d.appendChild(span);
  link.className="news_link";
  data.innerHTML=d+c;
  head=document.createTextNode(h);
  news_h.appendChild(head);
  news_d.appendChild(data);
  

  box.insertBefore(data,link)
  //span_src.innerHTML="Source:"+ s;
  if(img_s==(null||undefined))
    img.src="assets/image/toi.png"
  else
  img.src=img_s;
  link.href=l;
  
  link.innerHTML="Read More"
}
function news(){

  status=5;
  border();
  dataSupply(status);
        
        document.getElementById('india').style.display="none"
     document.getElementById('world').style.display="none";
 document.getElementById('news').style.display="block";
 document.getElementById('info').style.display="none";
 document.getElementById('about').style.display="none";
  //getNews("Outbreak Head","1289 got injude ajkfnak ajsnda asdais iadd","TOI","ksldhk","assets/image/toi.png");
  }

 function border(){
           if(status==1){
            document.getElementById('w_btn').style.borderBottom="11px solid white";
            document.getElementById('in_btn').style.borderBottom="none";
            document.getElementById('if_btn').style.borderBottom="none";
            document.getElementById('ab_btn').style.borderBottom="none";
            document.getElementById('ns_btn').style.borderBottom="none";
           }
           
           else if (status==2)
           {
            document.getElementById('w_btn').style.borderBottom="none";
            document.getElementById('in_btn').style.borderBottom="11px solid white";
            document.getElementById('if_btn').style.borderBottom="none";
            document.getElementById('ab_btn').style.borderBottom="none";
            document.getElementById('ns_btn').style.borderBottom="none";
           }
           else if  (status==3)
           {
            document.getElementById('w_btn').style.borderBottom="none";
            document.getElementById('in_btn').style.borderBottom="none";
            document.getElementById('if_btn').style.borderBottom="11px solid white";
            document.getElementById('ab_btn').style.borderBottom="none";
            document.getElementById('ns_btn').style.borderBottom="none";
           }
                      else if  (status==4)
                      {
                        document.getElementById('w_btn').style.borderBottom="none";
                        document.getElementById('in_btn').style.borderBottom="none";
                        document.getElementById('if_btn').style.borderBottom="none";
                        document.getElementById('ns_btn').style.borderBottom="none";
                        document.getElementById('ab_btn').style.borderBottom="11px solid white";
                       }     
                       
                       else if(status==5){
                        document.getElementById('w_btn').style.borderBottom="none";
                        document.getElementById('in_btn').style.borderBottom="none";
                        document.getElementById('if_btn').style.borderBottom="none";
                        document.getElementById('ab_btn').style.borderBottom="none";
                        document.getElementById('ns_btn').style.borderBottom="11px solid white";
                       }
                          else{
            document.getElementById('ab_btn').style.borderBottom="none";
            document.getElementById('w_btn').style.borderBottom="none";
            document.getElementById('in_btn').style.borderBottom="none";
            document.getElementById('if_btn').style.borderBottom="none";
            document.getElementById('ns_btn').style.borderBottom="none";
            
           }}
  
 function search() {
   var input, filter, table, tr, td, i, txtValue;
   table = document.getElementById("tablebody");
   input = document.getElementById("filter");
   if(status==2){
    input = document.getElementById("filter_i");
    table = document.getElementById("tablebody_i");
   }
  
  filter = input.value.toUpperCase();

  tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[0];
  if (td) {
  txtValue = td.textContent || td.innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
   tr[i].style.display = "";
        } else {
     tr[i].style.display = "none";
     }
     }       
     }
  }
  function myFunction(x) {
    if (x.matches) { // If media query matches
     // nav_main.setAttribute('hidden','');
      nav_main2.removeAttribute('hidden');
      nav_link.setAttribute('hidden','');
     
    } 
  
  }
  var screen = window.matchMedia("(max-width: 1040px)")
  myFunction(screen); // Call listener function at run time
  screen.addListener(myFunction) 