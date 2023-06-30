const {storage} = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store{
    static getProducts(){
        try {
            return storage.get("products").value();
        }
        catch(error){
            throw new BadRequestError(error)
        }
    }
    static getProductById(id) {
        try {
            return storage.get("products").find({ id: Number(id)}).value();
        }
        catch (error) {
            throw new BadRequestError(error);
        }
    }
}
module.exports = Store;