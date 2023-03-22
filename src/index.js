const http = require('http')
const salary = require('./controllers/salary')

const server = http.createServer(async (req, res)=>{
    const { url, method } = req

    console.log(`URL: ${url} - Method: ${method}`)

    try{
        if(method === 'POST'){
            if (url === "/api/salary") {
                salary.calculateSalary(req, res)
            }
            if(url !== "/api/salary"){
                res.writeHead(404, {'Content-Type': 'application/json'})
                res.write(JSON.stringify({message : 'Does not exist'}))
                res.end()
            }
        }
        if(method !== 'POST'){
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(JSON.stringify({message : 'Hello'}))
            res.end()
        }
    }catch(e){
        console.log(e)
    }

   
})

server.listen(3100)
console.log('Server on port 3100')