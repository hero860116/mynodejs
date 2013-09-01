exports.sayHello = function (query) { 
  console.log(query); 

   var user = new Object();
   user.name = 'lwl'
   user.age = 27;

  return user;
}; 

exports.list = function (query) { 
  console.log(query); 
  
   var users = new Array();

   var user = new Object();
   user.name = 'lwl'
   user.age = 27;

   users.push(user);

  return users;
}; 