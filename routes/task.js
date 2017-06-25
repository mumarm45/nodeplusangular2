var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');

var db = mongojs('mongodb://mum:123@ds131492.mlab.com:31492/mum_task')


router.get('/tasks', (req, res, next) => {

    db.task.find((err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });


});

router.get('/tasks/:id', (req, res, next) => {

    db.task.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });


});

router.post('/tasks', (req, res, next) => {

    var task = req.body;
    task.createdByDate = new Date();
    if (!task.title || task.isDone) {
        res.status(400);
        res.jos({ 'err': "Data is not correct" });
    } else {
        db.task.save(task, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }




});

router.delete('/tasks/:id', (req, res, next) => {

    db.task.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });


});

router.put('/tasks/:id', (req, res, next) => {
    var task = req.body;
    var updateTask = {};
    if (task.isDone) {
        updateTask.isDone = task.isDone
    }
    if (task.title) {
        updateTask.title = task.title;
    }
    if (!updateTask.title) {
        res.status(400);
        res.json({ 'err': "Data is not correct" });
    } else {
        db.task.update({ _id: mongojs.ObjectId(req.params.id) }, updateTask, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }



});


module.exports = router;