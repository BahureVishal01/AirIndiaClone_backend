const helpDetails = (req, res)=>{
    return res.status(200).send({
        success: true,
        message: "successfully hitting help api",
        data: {
            contact: "91xxxxxxxx"
        }
    })
}

 module.exports = {
    helpDetails
}
