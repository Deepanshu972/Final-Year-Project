const mongoose = require("mongoose");
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const invoiceSchema = new mongoose.Schema({
    order_id: {
        type: ObjectId,
        required: true
    },
    invoice: {
        type: Object,
        required: true
    }
})

const invoice = new mongoose.model("invoice", invoiceSchema);
module.exports = invoice;