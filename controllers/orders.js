const Order = require('../models/Order');

module.exports = {
    // Get all orders
    index: async (req, res) => {
        try {
            const orders = await Order.find().populate('user').populate('products.product');
            if (orders.length > 0) {
                res.status(200).json({
                    status: true,
                    data: orders,
                    method: req.method,
                    url: req.url
                });
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                });
            }
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    // Get a single order
    show: async (req, res) => {
        try {
            const order = await Order.findById(req.params.id).populate('user').populate('products.product');
            if (!order) {
                return res.status(404).json({ status: false, message: "Pesanan tidak ditemukan" });
            }
            res.json({
                status: true,
                data: order,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    // Create a new order
    store: async (req, res) => {
        try {
            const order = await Order.create(req.body);
            res.status(201).json({
                status: true,
                data: order,
                method: req.method,
                url: req.url,
                message: "Pesanan berhasil dibuat"
            });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    // Update an order
    update: async (req, res) => {
        try {
            const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            }).populate('user').populate('products.product');

            if (!order) {
                return res.status(404).json({ status: false, message: "Pesanan tidak ditemukan" });
            }

            res.json({
                status: true,
                data: order,
                method: req.method,
                url: req.url,
                message: "Pesanan berhasil diperbarui"
            });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    // Delete an order
    delete: async (req, res) => {
        try {
            const order = await Order.findByIdAndDelete(req.params.id);
            if (!order) {
                return res.status(404).json({ status: false, message: "Pesanan tidak ditemukan" });
            }

            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Pesanan berhasil dihapus"
            });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
};
