const WorkerModel = require('../models/WorkerModel');

module.exports = {
    create: (req, res) => {
        let worker = new WorkerModel({
            name: req.body.name,
            password: req.body.password,
            address: req.body.address,
            phonenumber: req.body.phonenumber
        });

        worker.save()
        .then(result => {
            req.json({success: true, result: result});
        })
        .catch(err =>{
            res.json({ success: false, result: err});
        });
    },

    update: (req, res) => {
        WorkerModel.update({_id: req.body._id}, req.body)
        .then(worker => {
            if(!worker) res.json({success: false, result: "no such worker exists"});
            res.json(worker);
        })
        .catch(err => {
            res.json({success:false, result: err});
        });
    },

    retrieve: (req, res) => {
        WorkerModel.find()
        .then(worker => {
            if(!worker) res.json({ success: false, result: "Worker not found"}); 
            res.json({success: true, result: result});
        })
        .catch(err => {
            res.json({ success: false, result: err});
        });
    }, 

    delete: (req, res) => {
        WorkerModel.remove({_id:req.body._id})
        .then(worker => {
            if(!worker) res.json({success: false, result:"no worker with such id found"});
            res.json({success: true, result: result});
        })
        .catch(err => res.json({success: false, result: err}));
    }

};