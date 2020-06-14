const Dev = require('../models/Dev');

class LikeController {
    async store(req, res) {
        const {devId} = req.params;
        const {user} = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({error:'Target Dev does not found'});
        }

        if(!loggedDev) {
            return res.status(400).json({error:'Logged Dev does not found'});
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];

            if(loggedSocket){
                req.io.to(loggedSocket).emit('match', targetDev);
            }

            if(targetSocket){
                req.io.to(targetSocket).emit('match', loggedDev);
            }

        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
}

module.exports = new LikeController();