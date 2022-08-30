const { city,state } = require('../models');


exports.create = async (req, res) => {
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
            message: "Error creating the city.",
            citycreate: error
        })
    }
}


exports.findAll = async (req, res) => {
 try{

    const cityget = await city.findAll({
        where: {},
        include: [
            { model: state, attributes: ['id'] }],
    })
    return res.status(200).json({  
        message: "All City fetched successfully.",
        cityget: cityget
    })
 }
 catch (error){
    return res.status(400).json({  
        message: "Error fetching departments.",
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
    const city_update = await city.update(req.body, {where: { id: req.params.id}, returning: true, plain: true })
    return res.status(200).json({
        success: true,
        message: "City updated successfully.",
        cityget: city_update
    })
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: "Error updating the city.",
            citycreate: error
        })
    }
    }

exports.delete = async (req, res) => {
try{   
     const city_delete = await city.destroy({where:{id:req.params.id}})
     return res.status(200).json({
        message: "City deleted successfully.",
        citydelete: city_delete
      })
   }
   catch(error){
    return res.status(400).json({
        success: false,
        message: "Error deleted the city.",
        citycreate: error
    })
   }

}

