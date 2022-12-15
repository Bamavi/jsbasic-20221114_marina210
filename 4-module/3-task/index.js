function highlight(table) {
//const table = document.body.querySelector('table');
 
//console.log( table.rows[0].cells[0].innerHTML );
 
let colStatus = 0;
 let colGender =0;
 let colAge = 0;
for (let i=0; i< table.rows[0].cells.length; i++) {
 switch(table.rows[0].cells[i].textContent) {
  case 'Status':  
    colStatus = i;
    break;
  case 'Gender':  
    colGender = i;
    break;  
  case 'Age':  
    colAge = i;
   };
 
}
 // console.log(colStatus,colGender,colAge);
for (let i=1; i< table.rows.length; i++ ){
 //console.log(table.rows[i].cells[colStatus].dataset.available);
  
 switch (table.rows[i].cells[colStatus].dataset.available ) {
   case 'true': 
     table.rows[i].className ='available' ;
     break;
   case 'false': 
     table.rows[i].className ='unavailable' ;
     break;
   case undefined :
     table.rows[i].style.hidden = 'true' ;
 };
  
if (table.rows[i].cells[colGender].textContent ==='m') {
  table.rows[i].className=  'male'; 
} else if (table.rows[i].cells[colGender].textContent ==='f') {
  table.rows[i].className ='female';
} ;

//console.log(parseInt(table.rows[i].cells[colAge].textContent,10));  
 if ((parseInt(table.rows[i].cells[colAge].textContent,10) || 0) < 18) {
  table.rows[i].style="text-decoration: line-through"; 
}
 //table.rows[i].cells[colStatus].style.backgroundColor = 'red';
}
} 