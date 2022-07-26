const {areAvailableQueries}=require("../utils/filterQueries")

module.exports=(req, res ,next)=>{
    if(Object.keys(req.query).length){
        const availableQueries = areAvailableQueries(req.query);
        req.availableQueries=availableQueries;
        console.log(req.availableQueries);
    }
    next();
}