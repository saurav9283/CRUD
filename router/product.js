import express from 'express';
import {
    addProduct,
    updateProduct,
    getProducts,
    deleteProduct,
} from '../controller/product.js'
const router = express.Router()
router.get('/', getProducts).post('/', addProduct)
router.put('/:id',updateProduct).delete('/:id',deleteProduct)

export default router