const swag = require('../models/swag');

module.exports = {
    add: (req, res, next) => {

        const { id } = req.query;
        const { cart } = req.session.user;

        const index = cart.findIndex(swag => swag.id == id);

        if (index === -1) {
            const selectedSwag = swag.find(swag => swag.id == id);

            cart.push(selectedSwag);
            req.session.user.total += selectedSwag.price;
        }
        res.status(200).send(req.session.user);
    },
    delete: (req, res, next) => {
        
    },

    checkout: (req, res, next) => {

    },
}