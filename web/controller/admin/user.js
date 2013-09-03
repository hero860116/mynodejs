exports.sayHello = function ( user) {
   var user = new Object();
   user.name = 'lwl'
   user.age = 27;

  return user;
}; 

exports.list = function (name , age) {
  
       var users = new Array();

   var user = new Object();
   user.name = "李伟林"
   user.age = age;

   users.push(user);

  return users;
}; 