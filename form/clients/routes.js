module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index')
	})
  app.post('/submit', function(req, res){
    console.log(req.body);
		res.json(req.body)
  })

}
