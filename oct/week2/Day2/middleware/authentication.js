const authenticate = (req,res,next) =>{
    console.log("auth")
    const isValidate = true
    if (isValidate) {
        next()
    } else {
        res.send("auth failed")
    }
}

module.exports = authenticate