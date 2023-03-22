const { bodyParser } = require('../helpers/bodyParser')

const calculateSalary = async (req, res) => {

    await bodyParser(req);
    console.log('controller', req.body)
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify({message : 'Hello salary'}))
    res.end()
    
    return res
}

module.exports = {
    calculateSalary,
}
  