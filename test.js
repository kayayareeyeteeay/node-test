const sql = require('mssql/msnodesqlv8');

var config = {
    server: 'localhost\\SQLEXPRESS',
    database: 'FundWise',
    user: 'sa',
    password: '1A2w3e4F',
    driver: 'msnodesqlv8',
    options:{
        trustServerCertificate: true
    }
};

sql.connect(config, function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select * from dbo.investments",function(err,records){
        if(err)console.log(err);
        else console.log(records);
    })
})



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

/*async function createDatabase(){
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




module.exports = {createDatabase, sql};


*/