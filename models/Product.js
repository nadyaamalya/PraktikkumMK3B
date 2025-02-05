const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan isikan nama produk'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Silahkan isikan harga produk']
    },
    stock: {
        type: Number,
        required: [true, 'Silahkan isikan jumlah stok produk']
    },
    description: {
        type: String,
        required: [true, 'Silahkan isikan deskripsi produk']
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
