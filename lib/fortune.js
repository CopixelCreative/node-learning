// fortune array!
var fortunes = [
    "This is good",
    "This is very good",
    "Christmas is good"
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};