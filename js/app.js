'use strict'
let hourswork=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// first Location
let Seattle={
 min:23,
 max:65,
 hourWork:0,
 cookisAvg:6.3,
 arrseattle:[],
 getHourWork:function (min,max) 
 {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        this.cookisAvg=Math.floor(this.cookisAvg);
        let hourWork= Math.floor(Math.random() * (max - min + 1) + min)*this.cookisAvg;
        this.arrseattle.push(hourWork);    
 }
}
let SeattleCookies=function(){
let idsalamon=document.getElementById('salamon');
let pEl=document.createElement('p');
idsalamon.appendChild(pEl);
pEl.textContent='Seattle';
let ulEl=document.createElement('ul');
idsalamon.appendChild(ulEl);
let total=0;
for (let i=0;i< hourswork.length;i++)
{
   let liEl=document.createElement('li');
   ulEl.appendChild(liEl);
   Seattle.getHourWork();
   total+=Seattle.arrseattle[i];
   liEl.textContent=hourswork[i]+':'+ Seattle.arrseattle[i]+' Cookies';

}
let liEl1=document.createElement('li');
ulEl.appendChild(liEl1);
liEl1.textContent='Total : '+total+ ' Cookies';
}
SeattleCookies();

// second Location

let Tokyo={
    min:3,
    max:24,
    hourWork:0,
    cookisAvg:1.2,
    arrTokyo:[],
    getHourWork:function (min,max) 
    {
           min = Math.ceil(this.min);
           max = Math.floor(this.max);
           this.cookisAvg=Math.floor(this.cookisAvg);
           let hourWork= Math.floor(Math.random() * (max - min + 1) + min)*this.cookisAvg;
           this.arrTokyo.push(hourWork);

    }
   }
   let TokyoCookies=function(){
   let idTokyo=document.getElementById('Tokyo');
   let pEl=document.createElement('p');
   idTokyo.appendChild(pEl);
   pEl.textContent='Tokyo';
   let ulEl=document.createElement('ul');
   idTokyo.appendChild(ulEl);
   let total=0;
   for (let i=0;i< hourswork.length;i++)
   {
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      Tokyo.getHourWork();
      total+=Tokyo.arrTokyo[i];
      liEl.textContent=hourswork[i]+':'+ Tokyo.arrTokyo[i]+' Cookies';
   
   }
   let liEl1=document.createElement('li');
   ulEl.appendChild(liEl1);
   liEl1.textContent='Total : '+total+ ' Cookies';
   }
   TokyoCookies();

   // Third location 
   

   let Dubai={
    min:11,
    max:38,
    hourWork:0,
    cookisAvg:3.7,
    arrDubai:[],
    getHourWork:function (min,max) 
    {
           min = Math.ceil(this.min);
           max = Math.floor(this.max);
           this.cookisAvg=Math.floor(this.cookisAvg);
           let hourWork= Math.floor(Math.random() * (max - min + 1) + min)*this.cookisAvg;
           this.arrDubai.push(hourWork);

    }
   }
   let DubaiCookies=function(){
   let idDubai=document.getElementById('Dubai');
   let pEl=document.createElement('p');
   idDubai.appendChild(pEl);
   pEl.textContent='Dubai';
   let ulEl=document.createElement('ul');
   idDubai.appendChild(ulEl);
   let total=0;
   for (let i=0;i< hourswork.length;i++)
   {
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      Dubai.getHourWork();
      total+=Dubai.arrDubai[i];
      liEl.textContent=hourswork[i]+':'+ Dubai.arrDubai[i]+' Cookies';
   
   }
   let liEl1=document.createElement('li');
   ulEl.appendChild(liEl1);
   liEl1.textContent='Total : '+total+ ' Cookies';
   }
   DubaiCookies();

   // forth location
   let Paris={
    min:20,
    max:38,
    hourWork:0,
    cookisAvg:2.3,
    arrParis:[],
    getHourWork:function (min,max) 
    {
           min = Math.ceil(this.min);
           max = Math.floor(this.max);
           this.cookisAvg=Math.floor(this.cookisAvg);
           let hourWork= Math.floor(Math.random() * (max - min + 1) + min)*this.cookisAvg;
           this.arrParis.push(hourWork);

    }
   }
   let ParisCookies=function(){
   let idParis=document.getElementById('Paris');
   let pEl=document.createElement('p');
   idParis.appendChild(pEl);
   pEl.textContent='Paris';
   let ulEl=document.createElement('ul');
   idParis.appendChild(ulEl);
   let total=0;
   for (let i=0;i< hourswork.length;i++)
   {
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      Paris.getHourWork();
      total+=Paris.arrParis[i];
      liEl.textContent=hourswork[i]+':'+ Paris.arrParis[i]+' Cookies';
   
   }
   let liEl1=document.createElement('li');
   ulEl.appendChild(liEl1);
   liEl1.textContent='Total : '+total+ ' Cookies';
   }
   ParisCookies();

   
   // fifth location 

   let Lima={
    min:2,
    max:16,
    hourWork:0,
    cookisAvg:4.6,
    arrLima:[],
    getHourWork:function (min,max) 
    {
           min = Math.ceil(this.min);
           max = Math.floor(this.max);
           this.cookisAvg=Math.floor(this.cookisAvg);
           let hourWork= Math.floor(Math.random() * (max - min + 1) + min)*this.cookisAvg;
           this.arrLima.push(hourWork);

    }
   }
   let LimaCookies=function(){
   let idLima=document.getElementById('Lima');
   let pEl=document.createElement('p');
   idLima.appendChild(pEl);
   pEl.textContent='Lima';
   let ulEl=document.createElement('ul');
   idLima.appendChild(ulEl);
   let total=0;
   for (let i=0;i< hourswork.length;i++)
   {
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      Lima.getHourWork();
      total+=Lima.arrLima[i];
      liEl.textContent=hourswork[i]+':'+ Lima.arrLima[i]+' Cookies';
   
   }
   let liEl1=document.createElement('li');
   ulEl.appendChild(liEl1);
   liEl1.textContent='Total : '+total+ ' Cookies';
   }
   LimaCookies();
