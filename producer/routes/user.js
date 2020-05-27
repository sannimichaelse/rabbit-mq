const Router = require("express").Router;

const publishToQueue = require("../services/MQService");

let router = Router();

router.post("/msg", async(req, res, next) => {
    let { queueName, payload } = req.body;
    await publishToQueue(queueName, payload);
    res.statusCode = 200;
    res.data = { "message-sent": true };
    next();
});

module.exports = router;