const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const Product = require('../models/product');

const router = express.Router();

// Validation middleware
const validateProduct = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Product name must be between 1 and 100 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('price')
    .isFloat({ min: 0.01 })
    .withMessage('Price must be a positive number'),
  body('stock')
    .isInt({ min: 0 })
    .withMessage('Stock must be a non-negative integer')
];

// Error handling middleware for validations
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation Error',
      details: errors.array()
    });
  }
  next();
};

// GET all products
router.get('/', 
  query('limit').optional().isInt({ min: 1, max: 100 }).toInt(),
  query('offset').optional().isInt({ min: 0 }).toInt(),
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const limit = req.query.limit || 10;
      const offset = req.query.offset || 0;
      
      const products = await Product.findAll(limit, offset);
      const total = await Product.count();
      
      res.status(200).json({
        data: products,
        pagination: {
          total,
          limit,
          offset,
          pages: Math.ceil(total / limit)
        }
      });
    } catch (error) {
      next(error);
    }
  }
);

// GET single product by ID
router.get('/:id',
  param('id').isUUID().withMessage('Invalid product ID'),
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({
          error: 'Product not found',
          id: req.params.id
        });
      }
      
      res.status(200).json({ data: product });
    } catch (error) {
      next(error);
    }
  }
);

// POST create new product
router.post('/',
  validateProduct,
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const product = await Product.create(req.body);
      
      res.status(201).json({
        message: 'Product created successfully',
        data: product
      });
    } catch (error) {
      next(error);
    }
  }
);

// PUT update product
router.put('/:id',
  param('id').isUUID().withMessage('Invalid product ID'),
  validateProduct,
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({
          error: 'Product not found',
          id: req.params.id
        });
      }
      
      const updatedProduct = await Product.update(req.params.id, req.body);
      
      res.status(200).json({
        message: 'Product updated successfully',
        data: updatedProduct
      });
    } catch (error) {
      next(error);
    }
  }
);

// DELETE product
router.delete('/:id',
  param('id').isUUID().withMessage('Invalid product ID'),
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({
          error: 'Product not found',
          id: req.params.id
        });
      }
      
      const deletedProduct = await Product.delete(req.params.id);
      
      res.status(200).json({
        message: 'Product deleted successfully',
        data: deletedProduct
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
