exports.sayHello = function ( user) {
  console.log(query); 

   var user = new Object();
   user.name = 'lwl'
   user.age = 27;

  return user;
}; 

exports.list = function (name , age) {
  
   var users = new Array();

   var user = new Object();
   user.name = name
   user.age = age;

   users.push(user);

  return users;
}; 