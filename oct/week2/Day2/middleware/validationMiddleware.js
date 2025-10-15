const validation = (req,res,next) =>{
    console.log("validation")
    const isValidate = true
    if (isValidate) {
        next()
    } else {
        res.send("validation failed")
    }
}

module.exports = validation