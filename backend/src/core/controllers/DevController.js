const axios = require('axios');
const Dev = require('../models/Dev');

class DevController {
    async index(req, res){
        const {user} = req.headers;
        
        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and:[
                { _id:{ $ne:user } },
                {_id:{ $nin:loggedDev.likes }},
                {_id:{ $nin:loggedDev.dislikes }}
            ]
        });

        return res.json(users);
    }

    async show(req, res) {
        const dev = await Dev.findById(req.params.id);

        if(!dev) {
            return res.status(404).json({error: 'Dev does not found'});
        }
        
        return res.json(dev);
    }

    async store(req, res) {
        const {user} = req.body;

        const devExists = await Dev.findOne({user});

        if(devExists) {
            return res.json(DevExists);
        }

        const response = await axios.get(`https://api.github.com/users/${user}`);

        const {name, bio, avatar_url:avatar} = response.data;

        const dev = await Dev.create({
            name, 
            user,
            bio,
            avatar
        });
        
        return res.json(dev);
    }
}

module.exports = new DevController();