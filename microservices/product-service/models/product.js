const pool = require('../config/database');
const { v4: uuidv4 } = require('uuid');

class Product {
  // Create a new product
  static async create(data) {
    const { name, description, price, stock } = data;
    const id = uuidv4();
    const createdAt = new Date();
    
    const query = `
      INSERT INTO products (id, name, description, price, stock, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $6)
      RETURNING *
    `;
    
    const result = await pool.query(query, [id, name, description, price, stock, createdAt]);
    return result.rows[0];
  }

  // Get all products
  static async findAll(limit = 10, offset = 0) {
    const query = `
      SELECT * FROM products
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;
    
    const result = await pool.query(query, [limit, offset]);
    return result.rows;
  }

  // Get product by ID
  static async findById(id) {
    const query = 'SELECT * FROM products WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  // Update product
  static async update(id, data) {
    const { name, description, price, stock } = data;
    const updatedAt = new Date();
    
    const query = `
      UPDATE products
      SET name = $2, description = $3, price = $4, stock = $5, updated_at = $6
      WHERE id = $1
      RETURNING *
    `;
    
    const result = await pool.query(query, [id, name, description, price, stock, updatedAt]);
    return result.rows[0];
  }

  // Delete product
  static async delete(id) {
    const query = 'DELETE FROM products WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  // Get total count
  static async count() {
    const query = 'SELECT COUNT(*) FROM products';
    const result = await pool.query(query);
    return parseInt(result.rows[0].count);
  }
}

module.exports = Product;
