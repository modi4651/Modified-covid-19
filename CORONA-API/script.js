
$(document).ready(function(){
    var url=" https://api.covid19india.org/data.json"
    
    $.getJSON(url,function(data){
        console.log(data)
      
        var total_active,total_recovered,total_deaths,total_confirmed,Last_updated_time
        var state=[]
        var confirmed=[]
        var recovered=[]
        var deaths=[]
        var lastupdatedtime=[]
        $.each(data.statewise,function(id,obj){
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
            lastupdatedtime.push(obj.lastupdatedtime)
        })
        
     
      state.shift()
      confirmed.shift()
      recovered.shift()
      deaths.shift()
      lastupdatedtime.shift()
      console.log(state)

       Last_updated_time=data.statewise[0].lastupdatedtime
       total_active=data.statewise[0].active
       total_confirmed=data.statewise[0].confirmed
       total_recovered=data.statewise[0].recovered
       total_deaths=data.statewise[0].deaths

       $("#lastupdatedtime").append(Last_updated_time)
       $("#active").append(total_active)
       $("#confirmed").append(total_confirmed)
       $("#recovered").append(total_recovered)
       $("#deaths").append(total_deaths)

       var myChart =document.getElementById("myChart").getContext('2d')

       var  chart = new Chart(myChart,{
           type:'line',
           data:{
               labels:state,
               datasets: [
                
                {
                     label: "Confirmed Cases",
                     data:confirmed,
                     backgroundColor:"#f1c40f",
                      minBarLength:100
                },
                {
                    label: "Recovered Cases",
                     data:recovered,
                      backgroundColor:"#",
                       minBarLength:100
        },
                {
                    label: "Decreased",
                    data:deaths,
                    backgroundColor:"#2ec771",
                     minBarLength:100
               },
              
            
               
               

               ],
           },
           options:{},
       })

    
       var total_active_MH,total_recovered_MH,total_deaths_MH,total_confirmed_MH
       var state=[]
       var confirmed=[]
       var recovered=[]
       var deaths=[]
       $.each(data.statewise,function(id,obj){
           state.push(obj.state)
           confirmed.push(obj.confirmed)
           recovered.push(obj.recovered)
           deaths.push(obj.deaths)
       })
       
    
     state.shift()
     confirmed.shift()
     recovered.shift()
     deaths.shift()
     console.log(state)


      total_active_MH=data.statewise[1].active
      total_confirmed_MH=data.statewise[1].confirmed
      total_recovered_MH=data.statewise[1].recovered
      total_deaths_MH=data.statewise[1].deaths

      $("#active_MH").append(total_active_MH)
      $("#confirmed_MH").append(total_confirmed_MH)
      $("#recovered_MH").append(total_recovered_MH)
      $("#deaths_MH").append(total_deaths_MH)

      var total_active_TN,total_recovered_TN,total_deaths_TN,total_confirmed_TN
      var state=[]
      var confirmed=[]
      var recovered=[]
      var deaths=[]
      $.each(data.statewise,function(id,obj){
          state.push(obj.state)
          confirmed.push(obj.confirmed)
          recovered.push(obj.recovered)
          deaths.push(obj.deaths)
      })
      
   
    state.shift()
    confirmed.shift()
    recovered.shift()
    deaths.shift()
    console.log(state)


     total_active_TN=data.statewise[4].active
     total_confirmed_TN=data.statewise[4].confirmed
     total_recovered_TN=data.statewise[4].recovered
     total_deaths_TN=data.statewise[4].deaths

     $("#active_TN").append(total_active_TN)
     $("#confirmed_TN").append(total_confirmed_TN)
     $("#recovered_TN").append(total_recovered_TN)
     $("#deaths_TN").append(total_deaths_TN)

     var total_active_DL,total_recovered_DL,total_deaths_DL,total_confirmed_DL
     var state=[]
     var confirmed=[]
     var recovered=[]
     var deaths=[]
     $.each(data.statewise,function(id,obj){
         state.push(obj.state)
         confirmed.push(obj.confirmed)
         recovered.push(obj.recovered)
         deaths.push(obj.deaths)
     })
     
  
   state.shift()
   confirmed.shift()
   recovered.shift()
   deaths.shift()
   console.log(state)


    total_active_DL=data.statewise[7].active
    total_confirmed_DL=data.statewise[7].confirmed
    total_recovered_DL=data.statewise[7].recovered
    total_deaths_DL=data.statewise[7].deaths

    $("#active_DL").append(total_active_DL)
    $("#confirmed_DL").append(total_confirmed_DL)
    $("#recovered_DL").append(total_recovered_DL)
    $("#deaths_DL").append(total_deaths_DL)

    var total_active_GJ,total_recovered_GJ,total_deaths_GJ,total_confirmed_GJ
    var state=[]
    var confirmed=[]
    var recovered=[]
    var deaths=[]
    $.each(data.statewise,function(id,obj){
        state.push(obj.state)
        confirmed.push(obj.confirmed)
        recovered.push(obj.recovered)
        deaths.push(obj.deaths)
    })




    
 
  state.shift()
  confirmed.shift()
  recovered.shift()
  deaths.shift()
  console.log(state)


   total_active_GJ=data.statewise[15].active
   total_confirmed_GJ=data.statewise[15].confirmed
   total_recovered_GJ=data.statewise[15].recovered
   total_deaths_GJ=data.statewise[15].deaths

   $("#active_GJ").append(total_active_GJ)
   $("#confirmed_GJ").append(total_confirmed_GJ)
   $("#recovered_GJ").append(total_recovered_GJ)
   $("#deaths_GJ").append(total_deaths_GJ)
    
   var total_active_UP,total_recovered_UP,total_deaths_UP,total_confirmed_UP
    var state=[]
    var confirmed=[]
    var recovered=[]
    var deaths=[]
    $.each(data.statewise,function(id,obj){
        state.push(obj.state)
        confirmed.push(obj.confirmed)
        recovered.push(obj.recovered)
        deaths.push(obj.deaths)
    })
    
 
  state.shift()
  confirmed.shift()
  recovered.shift()
  deaths.shift()
  console.log(state)


   total_active_UP=data.statewise[5].active
   total_confirmed_UP=data.statewise[5].confirmed
   total_recovered_UP=data.statewise[5].recovered
   total_deaths_UP=data.statewise[5].deaths

   $("#active_UP").append(total_active_UP)
   $("#confirmed_UP").append(total_confirmed_UP)
   $("#recovered_UP").append(total_recovered_UP)
   $("#deaths_UP").append(total_deaths_UP)
    
   var total_active_RJ,total_recovered_RJ,total_deaths_RJ,total_confirmed_RJ
   var state=[]
   var confirmed=[]
   var recovered=[]
   var deaths=[]
   $.each(data.statewise,function(id,obj){
       state.push(obj.state)
       confirmed.push(obj.confirmed)
       recovered.push(obj.recovered)
       deaths.push(obj.deaths)
   })
   

 state.shift()
 confirmed.shift()
 recovered.shift()
 deaths.shift()
 console.log(state)


  total_active_RJ=data.statewise[12].active
  total_confirmed_RJ=data.statewise[12].confirmed
  total_recovered_RJ=data.statewise[12].recovered
  total_deaths_RJ=data.statewise[12].deaths

  $("#active_RJ").append(total_active_RJ)
  $("#confirmed_RJ").append(total_confirmed_RJ)
  $("#recovered_RJ").append(total_recovered_RJ)
  $("#deaths_RJ").append(total_deaths_RJ)

  var total_active_WB,total_recovered_WB,total_deaths_WB,total_confirmed_WB
  var state=[]
  var confirmed=[]
  var recovered=[]
  var deaths=[]
  $.each(data.statewise,function(id,obj){
      state.push(obj.state)
      confirmed.push(obj.confirmed)
      recovered.push(obj.recovered)
      deaths.push(obj.deaths)
  })
  

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


 total_active_WB=data.statewise[8].active
 total_confirmed_WB=data.statewise[8].confirmed
 total_recovered_WB=data.statewise[8].recovered
 total_deaths_WB=data.statewise[8].deaths

 $("#active_WB").append(total_active_WB)
 $("#confirmed_WB").append(total_confirmed_WB)
 $("#recovered_WB").append(total_recovered_WB)
 $("#deaths_WB").append(total_deaths_WB)
     
  var total_active_MP,total_recovered_MP,total_deaths_MP,total_confirmed_MP
  var state=[]
  var confirmed=[]
  var recovered=[]
  var deaths=[]
  $.each(data.statewise,function(id,obj){
      state.push(obj.state)
      confirmed.push(obj.confirmed)
      recovered.push(obj.recovered)
      deaths.push(obj.deaths)
  })


  state.shift()
  confirmed.shift()
  recovered.shift()
  deaths.shift()
  console.log(state)
  
  
  total_active_OR=data.statewise[9].active
  total_confirmed_OR=data.statewise[9].confirmed
  total_recovered_OR=data.statewise[9].recovered
  total_deaths_OR=data.statewise[9].deaths
  
  $("#active_OR").append(total_active_OR)
  $("#confirmed_OR").append(total_confirmed_OR)
  $("#recovered_OR").append(total_recovered_OR)
  $("#deaths_OR").append(total_deaths_OR)
  
  var total_active_OR,total_recovered_OR,total_deaths_OR,total_confirmed_OR
   var state=[]
   var confirmed=[]
   var recovered=[]
   var deaths=[]
   $.each(data.statewise,function(id,obj){
       state.push(obj.state)
       confirmed.push(obj.confirmed)
       recovered.push(obj.recovered)
       deaths.push(obj.deaths)
   })
   


    state.shift()
  confirmed.shift()
  recovered.shift()
  deaths.shift()
  console.log(state)
  
  
  total_active_KL=data.statewise[6].active
  total_confirmed_KL=data.statewise[6].confirmed
  total_recovered_KL=data.statewise[6].recovered
  total_deaths_KL=data.statewise[6].deaths
  
  $("#active_KL").append(total_active_KL)
  $("#confirmed_KL").append(total_confirmed_KL)
  $("#recovered_KL").append(total_recovered_KL)
  $("#deaths_KL").append(total_deaths_KL)
  
  var total_active_KL,total_recovered_KL,total_deaths_KL,total_confirmed_KL
   var state=[]
   var confirmed=[]
   var recovered=[]
   var deaths=[]
   $.each(data.statewise,function(id,obj){
       state.push(obj.state)
       confirmed.push(obj.confirmed)
       recovered.push(obj.recovered)
       deaths.push(obj.deaths)
   })



  

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


 total_active_MP=data.statewise[16].active
 total_confirmed_MP=data.statewise[16].confirmed
 total_recovered_MP=data.statewise[16].recovered
 total_deaths_MP=data.statewise[16].deaths

 $("#active_MP").append(total_active_MP)
 $("#confirmed_MP").append(total_confirmed_MP)
 $("#recovered_MP").append(total_recovered_MP)
 $("#deaths_MP").append(total_deaths_MP)

 

 var total_active_KA,total_recovered_KA,total_deaths_KA,total_confirmed_KA
 var state=[]
 var confirmed=[]
 var recovered=[]
 var deaths=[]
 $.each(data.statewise,function(id,obj){
     state.push(obj.state)
     confirmed.push(obj.confirmed)
     recovered.push(obj.recovered)
     deaths.push(obj.deaths)
 })
 

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


total_active_KA=data.statewise[2].active
total_confirmed_KA=data.statewise[2].confirmed
total_recovered_KA=data.statewise[2].recovered
total_deaths_KA=data.statewise[2].deaths

$("#active_KA").append(total_active_KA)
$("#confirmed_KA").append(total_confirmed_KA)
$("#recovered_KA").append(total_recovered_KA)
$("#deaths_KA").append(total_deaths_KA)

var total_active_BR,total_recovered_BR,total_deaths_BR,total_confirmed_BR
 var state=[]
 var confirmed=[]
 var recovered=[]
 var deaths=[]
 $.each(data.statewise,function(id,obj){
     state.push(obj.state)
     confirmed.push(obj.confirmed)
     recovered.push(obj.recovered)
     deaths.push(obj.deaths)
 })
 

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


total_active_BR=data.statewise[11].active
total_confirmed_BR=data.statewise[11].confirmed
total_recovered_BR=data.statewise[11].recovered
total_deaths_BR=data.statewise[11].deaths

$("#active_BR").append(total_active_BR)
$("#confirmed_BR").append(total_confirmed_BR)
$("#recovered_BR").append(total_recovered_BR)
$("#deaths_BR").append(total_deaths_BR)

var total_active_HR,total_recovered_HR,total_deaths_HR,total_confirmed_HR
 var state=[]
 var confirmed=[]
 var recovered=[]
 var deaths=[]
 $.each(data.statewise,function(id,obj){
     state.push(obj.state)
     confirmed.push(obj.confirmed)
     recovered.push(obj.recovered)
     deaths.push(obj.deaths)
 })
 

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


total_active_HR=data.statewise[15].active
total_confirmed_HR=data.statewise[15].confirmed
total_recovered_HR=data.statewise[15].recovered
total_deaths_HR=data.statewise[15].deaths

$("#active_HR").append(total_active_HR)
$("#confirmed_HR").append(total_confirmed_HR)
$("#recovered_HR").append(total_recovered_HR)
$("#deaths_HR").append(total_deaths_HR)

var total_active_AP,total_recovered_AP,total_deaths_AP,total_confirmed_AP
 var state=[]
 var confirmed=[]
 var recovered=[]
 var deaths=[]
 $.each(data.statewise,function(id,obj){
     state.push(obj.state)
     confirmed.push(obj.confirmed)
     recovered.push(obj.recovered)
     deaths.push(obj.deaths)
 })
 

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


total_active_AP=data.statewise[3].active
total_confirmed_AP=data.statewise[3].confirmed
total_recovered_AP=data.statewise[3].recovered
total_deaths_AP=data.statewise[3].deaths

$("#active_AP").append(total_active_AP)
$("#confirmed_AP").append(total_confirmed_AP)
$("#recovered_AP").append(total_recovered_AP)
$("#deaths_AP").append(total_deaths_AP)

var total_active_JK,total_recovered_JK,total_deaths_JK,total_confirmed_JK
 var state=[]
 var confirmed=[]
 var recovered=[]
 var deaths=[]
 $.each(data.statewise,function(id,obj){
     state.push(obj.state)
     confirmed.push(obj.confirmed)
     recovered.push(obj.recovered)
     deaths.push(obj.deaths)
 })
 

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


total_active_JK=data.statewise[20].active
total_confirmed_JK=data.statewise[20].confirmed
total_recovered_JK=data.statewise[20].recovered
total_deaths_JK=data.statewise[20].deaths

$("#active_JK").append(total_active_JK)
$("#confirmed_JK").append(total_confirmed_JK)
$("#recovered_JK").append(total_recovered_JK)
$("#deaths_JK").append(total_deaths_JK)

var total_active_TA,total_recovered_TA,total_deaths_TA,total_confirmed_TA
 var state=[]
 var confirmed=[]
 var recovered=[]
 var deaths=[]
 $.each(data.statewise,function(id,obj){
     state.push(obj.state)
     confirmed.push(obj.confirmed)
     recovered.push(obj.recovered)
     deaths.push(obj.deaths)
 })
 

state.shift()
confirmed.shift()
recovered.shift()
deaths.shift()
console.log(state)


total_active_TG=data.statewise[10].active
total_confirmed_TG=data.statewise[10].confirmed
total_recovered_TG=data.statewise[10].recovered
total_deaths_TG=data.statewise[10].deaths

$("#active_TG").append(total_active_TG)
$("#confirmed_TG").append(total_confirmed_TG)
$("#recovered_TG").append(total_recovered_TG)
$("#deaths_TG").append(total_deaths_TG)

    })
    

})



