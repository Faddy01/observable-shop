-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT price_positive CHECK (price > 0),
  CONSTRAINT stock_non_negative CHECK (stock >= 0)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);

-- Add comments
COMMENT ON TABLE products IS 'Product catalog table';
COMMENT ON COLUMN products.id IS 'Unique product identifier (UUID)';
COMMENT ON COLUMN products.name IS 'Product name';
COMMENT ON COLUMN products.description IS 'Product description';
COMMENT ON COLUMN products.price IS 'Product price in USD';
COMMENT ON COLUMN products.stock IS 'Available stock quantity';
COMMENT ON COLUMN products.created_at IS 'Product creation timestamp';
COMMENT ON COLUMN products.updated_at IS 'Last update timestamp';
