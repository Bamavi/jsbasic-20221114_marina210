function highlight(table) {
  
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
   
 for (let i=1; i< table.rows.length; i++ ){
   
  let row = table.rows[i]; // new
   
  switch (row.cells[colStatus].dataset.available ) {
   case 'true': 
     row.classList.add('available')  ;
     break;
   case 'false': 
     row.classList.add('unavailable')  ;
     break;
   case undefined :
     row.hidden = 'true' ;
  };
  
  if (row.cells[colGender].textContent ==='m') {
    row.classList.add('male'); 
  } else if (row.cells[colGender].textContent ==='f') {
    row.classList.add('female');
  } ;
 
  if ((parseInt(row.cells[colAge].textContent,10) || 0) < 18) {
    row.style.textDecoration="line-through"; 
  };
 };
} 
