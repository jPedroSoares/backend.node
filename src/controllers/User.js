const userModel = require('../models/User')

module.exports = {
    async store(req, res) {

        const { name, email, age } = req.body;
    
        const user = await userModel.create({ name, email, age })
        
        return res.json(user);
    
    }
}