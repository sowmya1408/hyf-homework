const express = require("express");
// const app = express();
const mealRouter = express.Router();
//const router = express.Router();

// const pool = require("./../database");

const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();
const bodyParser = require('body-parser');
mealRouter.use(bodyParser.json());


const { MYSQL_URL } = process.env;
const connection = mysql.createConnection(MYSQL_URL);

//mysql://
// bd8675895da45f
// :
// 75f879dc
//@
//eu-cdbr-west-02.cleardb.net
//
//heroku_aabb3c300c2a208
//?reconnect=true

mealRouter.get('/meals', (req, res) => {
  connection.query("select * from meal", (err, results, fields) => {
      if(err) {
          return res.send(err);
      }
      res.json(results);
  })
})

mealRouter.get('/',(req, res) => {

  const mealQueries = {
    maxPrice: req.query.maxPrice,
    title: req.query.title,
    createdAfter: req.query.createdAfter,
    limit: req.query.limit

  }
  if(mealQueries.maxPrice) {
    connection.query(`select * from meal WHERE price < ${mealQueries.maxPrice}`, (err, results, fields) => {
      if(err) {
          return res.send(err);
      } 
      res.json(results);
  
  })
} else if(mealQueries.title) {
  connection.query(`select * from meal WHERE title like '%${mealQueries.title}%'`, (err, results, fields) => {
    if(err) {
        return res.send(err);
    } 
    res.json(results);

})

} else if(mealQueries.createdAfter){
  connection.query(`select * from meal WHERE createdAT > ${mealQueries.createdAfter}`, (err, results, fields) => {
    if(err) {
        return res.send(err);
    } 
    res.json(results);

})
} else if(mealQueries.limit) {
  connection.query(`select * from meal order by id desc limit ${mealQueries.limit}`, (err, results, fields) => {
    if(err) {
        return res.send(err);
    } 
    res.json(results);

})
} else {
  return res.json('Bad request/requested parameter is invalid')
}
})


mealRouter.post('/',(req,res) => {
  const meal = req.body;

  connection.query('INSERT into meal SET ?', meal,
  (err, results, fields) => {
      if(err) {
          return res.send(err);
      }
      res.json(results);
  })
})  

mealRouter.get('/:id',(req,res) => {
  const id = parseInt(req.params.id);

  connection.query(`select * from meal WHERE id=${id}`,
  (err, results, fields) => {
      if(err) {
          return res.send(err);
      }
      res.json(results);
  })
})

mealRouter.put('/:id',(req,res) => {
  const meal = req.body;
  const id = parseInt(req.params.id);

  connection.query(` UPDATE meal SET ? WHERE id=${id}`,meal,
  (err, results, fields) => {
      if(err) {
          return res.send(err);
      }
      res.json(results);
  })
})

mealRouter.delete('/:id',(req,res) => {
  const id = parseInt(req.params.id);

  connection.query(` DELETE from meal WHERE id=${id}`,
  (err, results, fields) => {
      if(err) {
          return res.send(err);
      }
      res.json(results);
  })
})
// error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)

module.exports = mealRouter;
