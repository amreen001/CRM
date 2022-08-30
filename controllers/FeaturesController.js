const {product_feature} = require('../models');


exports.featurecreate = async (req, res) => {
    await product_feature.create(req.body).then(result => {
        res.status(200).json({
            message: 'success',
            featurecreate: result
        }).catch(err => {
            res.status(404).json({
                message: 'error',
                featurecreate: err
            })
        })
    })
}



exports.featureget = async (req, res) => {

    await product_feature.findAll().then(result => {

        res.status(200).json({
            message: 'success all show me',
            featureget: result
        }).catch(err => {
            res.status(404).json({
                message: 'error',
                featureget: err
            })
        })
    })

}
exports.featureone = async (req, res) => {
    let id = req.params.id
    await product_feature.findOne({where: { id: id }}).then(result => {
        res.status(200).json({
            message: 'success id show me',
            featureone: result
        }).catch(err => {
            res.status(200).json({
                message: 'success not',
                featureone: err
            })
        })
    });
}
exports.featureupdate = async (req, res) => {
    await product_feature.update(req.body, {where: { id: req.params.id}}).then(result => {
        res.status(200).json({
            message: 'success update me',
            featureupdate: result
        }).catch(err => {
            res.status(200).json({
                message: 'not update',
                featureupdate: err
            })
        })
    });
}

exports.featuredelete = async (req, res) => {
    console.log(req.body)
    await product_feature.destroy ({where:{id:req.params.id}}).then(result =>{
            res.status(200).json({
                message:'success delete me',
                featuredelete: result
            }).catch(err => {
                res.status(400).json({
                    message:'success delete me',
                    featuredelete: err
                })
             })
    })

}

