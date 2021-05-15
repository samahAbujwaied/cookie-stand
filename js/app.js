'use strict'
let hourswork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let salesarr = [];
let checksum=[];

function Sales(storename, min, max, avg) {
      this.storename = storename;
      this.min = min;
      this.max = max;
      this.avg = avg;
      this.minMaxRandom = [];
      this.total=0;
      this.avgRandom = [];
      salesarr.push(this);
     
      
}
Sales.prototype.getHourWorks = function () {
   for(let i=0;i<hourswork.length;i++){
   let minMax = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
   this.minMaxRandom.push(minMax);
   let avgHour = Math.floor(minMax * this.avg);
   this.total+=avgHour;
   this.avgRandom.push(avgHour);

   }

}

let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);

let tableheader=function(){
let trhead = document.createElement('tr');
table.appendChild(trhead);
let thhead = document.createElement('th');
trhead.appendChild(thhead);
thhead.textContent = ' ';
for (let time = 0; time < hourswork.length; time++) {
   let thhead = document.createElement('th');
   trhead.appendChild(thhead);
   thhead.textContent = hourswork[time];
}
let thead = document.createElement('th');
trhead.appendChild(thead);
thead.textContent = 'Dalily location total ';
}

Sales.prototype.render = function(){  

   let trbody = document.createElement('tr');
   table.appendChild(trbody);
   let tdbody = document.createElement('td');
   trbody.appendChild(tdbody);
   tdbody.textContent = this.storename;

   for (let j = 0; j < hourswork.length; j++) {
      let tbody = document.createElement('td');
      trbody.appendChild(tbody);
      tbody.textContent = this.avgRandom[j];

   }
   let tbody = document.createElement('td');
      trbody.appendChild(tbody);
      tbody.textContent = this.total;

    
     


}
let avgTotal=function(){
    let avgtotal0 =0;
    let sumtotal=0;
    let tfoot=document.createElement('tfoot');
    table.appendChild(tfoot);
    let tr0=document.createElement('tr');
    tfoot.appendChild(tr0);
    let td0=document.createElement('td');
    tr0.appendChild(td0);
    td0.textContent='Totals'
   for (let index = 0; index < hourswork.length; index++) {
      avgtotal0=0;
      let td0=document.createElement('td');
      tr0.appendChild(td0);
      for (let g = 0; g < salesarr.length; g++) {
         let avvg= salesarr[g].avgRandom[index];
         avgtotal0+=avvg;}
     td0.textContent=avgtotal0;  
     sumtotal+=avgtotal0;
   }
   let td1=document.createElement('td');
   tr0.appendChild(td1);
   summ();
   if(sumtotal==checksum[0]){
      td1.textContent=sumtotal;
   }
   else 
   console.log('error');

 let pel=document.createElement('p');
 container.appendChild(pel);
 pel.textContent='sum of totals is  '+sumtotal;
}
let summ = function(){  
let sumtotal1=0;
 for (let m = 0; m < salesarr.length; m++) {
    sumtotal1+=salesarr[m].total;   
 }
   checksum.push(sumtotal1);
    let pel1=document.createElement('p');
    container.appendChild(pel1);
    pel1.textContent='sum of daily total location  '+sumtotal1;  
}

let seattle = new Sales('Seattle', 23, 65, 6.3);
let tokyo = new Sales('Tokyo', 3, 24, 1.2);
let dubai = new Sales('Dubai', 11, 38, 3.7);
let paris = new Sales('Paris', 20, 38, 2.3);
let lima = new Sales('Lima', 2, 16, 4.6);

tableheader();
seattle.getHourWorks();
seattle.render();
tokyo.getHourWorks();
tokyo.render();
dubai.getHourWorks();
dubai.render();
paris.getHourWorks();
paris.render();
lima.getHourWorks();
lima.render();
avgTotal();

let newCity=document.getElementById('addNewCity');
newCity.addEventListener('submit', addNewCity);
function addNewCity(event){

   event.preventDefault();
   let storeName =event.target.storeName.value;
   let minNum = parseInt( event.target.minNum.value);
   let maxNum = parseInt(event.target.maxNum.value);
   let avgNum = parseInt(event.target.avgNum.value);
   var x=document.forms["myForm"]["storeName"].value;
   var regex=/^[a-zA-Z]+$/;
   
   if (document.myForm.storeName.value == "" || document.myForm.minNum.value=="" || document.myForm.maxNum.value=="" ||
   document.myForm.avgNum.value==""  ) {
      alert("There is some input is empty try again ");
   }
   else  if (minNum>=maxNum){
      alert('please min number is larger than max number or you enter text try again')

   } else if (!x.match(regex))
   {
       alert("Must Store name be string");
       return false;
   }
   
   else{
   let newCity= new Sales(storeName, minNum, maxNum, avgNum);
   newCity.getHourWorks();
   newCity.render();
   
   
   }
   
}

  
  








