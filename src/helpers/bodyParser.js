const bodyParser = async (req) =>{   
    let totalData = "";

    try {
        await new Promise((resolve, reject) => {
            req
                .on("error", err => {
                    reject(err);
                })
                .on("data", chunk => {
                    totalData += chunk;
                })
                .on("end", () => {
                    req.body = JSON.parse(totalData);
                    resolve();
                })
        })
        return req.body;
    } catch (error) {
        throw new Error(`Error occurred while parsing request body: ${error.message}`);
    }
}
  
  module.exports = {bodyParser}