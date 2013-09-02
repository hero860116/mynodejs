exports.list = function(shopQuery) {
    var shops = new Array();
    for (var i = 0; i < 10; i++) {
        var shop = new Object();
        shop.id = i;
        shop.name = "韩都衣舍" + i;

        shops.push(shop);

    }

    return shops;
} ;

exports.test = function(shopQuery) {


    return shopQuery;
} ;

exports.test1 = function(shopQuery) {


    return shopQuery;
} ;

exports.test2 = function(shopQuery) {


    return shopQuery;
} ;

exports.test3 = function(shopQuery) {


    return shopQuery;
} ;
exports.test4 = function(shopQuery) {


    return "李伟林";
} ;