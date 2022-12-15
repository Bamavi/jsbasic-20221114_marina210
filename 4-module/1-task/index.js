function makeFriendsList(friends) {
    
let list = '\n'; //'<ul> \n';
   for (friend of friends) {
     list = list + ('  <li>' + friend.firstName + ' ' + friend.lastName + '</li>\n');
   };
  // list = list +'</ul>';
  let ul = document.createElement('ul');
   ul.innerHTML= list;
//document.body.append(ul);
  
return ul;
  


}
