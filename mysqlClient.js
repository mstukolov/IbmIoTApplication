/**
 * Created by Stukolov on 17.02.2017.
 */
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'sl-us-dal-9-portal.3.dblayer.com',
    port: '19904',
    user: 'admin',
    password: 'OOYHORSHUNYPKLAF',
    database: 'compose'
});
dropDB();
createTable();

var posts = ['hello','buy','good luck'];
addPosts(posts);

function createTable() {
    var sql = 'CREATE TABLE IF NOT EXISTS posts ('
        + 'id INTEGER PRIMARY KEY AUTO_INCREMENT,'
        + 'text text'
        + ');';
    db.query(sql, function (err, result) {
        if (err) console.log(err);
    });
}
function addPosts(posts) {
    var sql = 'INSERT INTO posts (text) VALUES ?';

    var values = posts.map(function (post) {
        return [post];
    });

    db.query(sql, [values], function (err, result) {
        if (err) console.log(err);
    });
}
function deletePosts(cb) {
    var sql = 'DELETE FROM posts WHERE 1';
    db.query(sql, function (err, result) {
        if (err) return cb(err);
        cb(null, result);
    });
}
function dropDB() {
    var sql = 'DROP TABLE IF EXISTS posts';
    db.query(sql, function (err, result) {
        if (err) console.log(err);
    });
}