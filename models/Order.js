const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referensi ke User
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Referensi ke Product
            quantity: { type: Number, required: true, min: 1 }
        }
    ],
    status: { 
        type: String, 
        enum: ['pending', 'processed', 'shipped', 'delivered', 'cancelled'], 
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
