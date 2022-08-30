const {product_feature} = require('../models');

exports.create = async (req, res) => {
try{
    const feature = await product_feature.create(req.body)
    return res.status(200).json({
        message: 'Feature created successfully',
        feature: feature
    })
}
   catch(error) {      
    return res.status(400).json({
        message: 'Error creating feature',
        feature: feature
    })
}
}


exports.findAll = async (req, res) => {
 try {
    const feature = await product_feature.findAll()
    return res.status(200).json({
        message: 'feature successfully fetched',
        feature: feature
    })
 }
    catch (error) {
        return res.status(400).json({
            message: 'Error fetching feature',
            feature: error
        })
    
    }

}
exports.findById = async (req, res) => {
   try {
    const feature = await product_feature.findOne({where: { id: id }})
        return res.status(200).json({
            message: 'feature successfully fetched',
            feature: feature
        })
    }
    catch (error) {
        return res.status(400).json({
            message: 'Error while fetching feature',
            feature: error
        })
    }

}
exports.update = async (req, res) => {
    try {
        const feature =  await product_feature.update(req.body, {where: { id: req.params.id},returning: true, plain: true})
           
        return res.status(200).json({
                message: 'feature updated successfully',
                feature: feature
            })
        }
        catch (error) {

            return res.status(400).json({
                message: 'Error updating feature',
                feature: error
            })
        }
}

exports.delete = async (req, res) => {
    try {
        const feature =  product_feature.destroy ({where:{id:req.params.id}})        
        return res.status(200).json({
                message: 'feature deleted successfully',
                feature: feature
            })
        }
        catch (error) {

            return res.status(400).json({
                message: 'Error deleting feature',
                feature: error
            })
        }
}

