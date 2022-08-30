const { city,state } = require('../models');


exports.citycreate = async (req, res) => {
    try{   
        const citycreate =  await city.create(req.body) 
        return res.status(200).json({
            message: 'city created successfully',
            citycreate: citycreate
        })

    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error creating city.",
            citycreate: error
        })
    }
}


exports.cityget = async (req, res) => {
 try{

    const cityget = await city.findAll({
        where: {},
        include: [
            { model: state, attributes: ['id'] }],
    })
    return res.status(200).json({  
        message: 'city get successfully',
        cityget: cityget
    })
 }
 catch (error){
    return res.status(400).json({  
        message: "Error creating city.",
        citycreate: error
    })
 }
}

exports.findById = async (req, res) => {
    try{
        return res.status(200).json({
            success: true,
            message: "City fetched successfully.",
            cityget: req.city
        })
    }   
    catch(error){
        return res.status(400).json({
            success: false,
            message: "Error creating city.",
            citycreate: error
        })
    }

             
}
exports.update = async (req, res) => {
    try{
    const city = await city.update(req.body, {where: { id: req.params.id}, returning: true, plain: true })
       return res.status(200).json({
            message: 'success update me',
            cityupdate: result
        })
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: "Error creating city.",
            citycreate: error
        })
    }
    }

exports.citydelete = async (req, res) => {
    console.log(req.body)
    await city.destroy ({where:{id:req.params.id}}).then(result =>{
            res.status(200).json({
                message:'success delete me',
                citydelete: result
            }).catch(err => {
                res.status(400).json({
                    message:'success delete me',
                    citydelete: err
                })
             })
    })

}

