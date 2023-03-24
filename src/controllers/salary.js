const { bodyParser } = require('../helpers/bodyParser')
const salaryService= require('../services/salary-calculation')

const calculateSalary = async (req, res) => {

    await bodyParser(req);

    const salaries = salaryService.calculateSalary(req.body.data)
    
    res.writeHead(200, {
        'Content-Type': 'application/json', 
        "Access-Control-Allow-Origin":"*", 
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
         "Access-Control-Allow-Methods" : "OPTIONS, POST, GET"   
    })
    res.write(JSON.stringify({salaries : salaries}))

    res.end()

    return res
}

module.exports = {
    calculateSalary,
}
  