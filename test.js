const sql = require('mssql/msnodesqlv8');

var config = {
    server: 'localhost\\SQLEXPRESS',
    database: 'FundWiseDb',
    user: 'sa',
    password: '1A2w3e4F',
    driver: 'msnodesqlv8',
    options:{
        trustServerCertificate: true
    }
};

async function createDatabase(){
    try{
        await sql.connect(config);

        const request = new sql.Request();
        const createDbQuery = `CREATE DATABASE FundWiseDb`;
        await request.query(createDbQuery) ;
       }
       catch(err){
        console.error("error creating db:", err.message);
       }
};

module.exports = {createDatabase, sql};


