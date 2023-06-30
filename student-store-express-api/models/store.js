const {storage} = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store{
    static getProducts(){
        try {
            return storage.get("products").values();
        }
        catch(error){
            throw new BadRequestError(error)
        }
    }
}
module.exports = Store;