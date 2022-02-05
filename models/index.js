// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: {
    model: "product_tag",
    unique: false
  },
  as: 'tags_on_product',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: {
    model: "product_tag",
    unique: false
  },
  as: 'products_tagged',
});
  


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
