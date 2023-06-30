const {storage} = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Order{
    static getOrders(){
        try{
            return storage.get('purchases').value();
        }
        catch(error){
            throw new BadRequestError(error);
        }
    }
    static getOrderById(id) {
        try {
            return storage.get('purchases').find({ id: Number(id)}).value();
        }
        catch (error) {
            throw new BadRequestError(error);
        }
    }
}

module.exports = Order;