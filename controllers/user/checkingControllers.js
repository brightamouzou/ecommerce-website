exports.simpleCheck=(req,res)=>{
    res.status(200).json({
      isAuthentificated: true,
    });
};