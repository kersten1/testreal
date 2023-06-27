async function main(params) {
    console.log(process.env);
    console.log(params.__ce_headers);
    console.log("params: "+params);
    return { 
        statusCode: 200, 
        headers: { 'Content-Type': 'application/json' }, 
        body: params };
}

module.exports.main = main;
