import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Plus, Minus, Star } from 'lucide-react';
import { menuData, shopInfoData } from '../mock';
import { useCart } from '../contexts/CartContext';

const CoffeeShop = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const { cart, addToCart, updateQuantity, getCartTotal, getCartItemCount } = useCart();

  const selectedCategoryData = menuData.categories.find(cat => cat.id === selectedCategory);
  const filteredItems = selectedCategoryData?.items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="coffee-shop-page">
      {/* Hero Section */}
      <section className="section-sm bg-gradient-to-r from-coffee-medium to-coffee-light text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Coffee Shop</h1>
          <p className="text-xl text-cream-medium max-w-2xl mx-auto">
            Explore our carefully crafted menu of premium coffee drinks, fresh pastries, and delicious treats
          </p>
        </div>
      </section>

      <div className="container py-8">
        {/* Floating Cart Button */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-coffee-dark text-white px-6 py-3 rounded-full shadow-lg hover:bg-coffee-medium transition-colors flex items-center space-x-3">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">{getCartItemCount()} items</span>
              <span className="text-accent-gold font-bold">${getCartTotal().toFixed(2)}</span>
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-medium"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {menuData.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-coffee-dark text-amber-200 font-semibold'
                        : 'text-text-secondary hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            {cart.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-24">
                <h3 className="font-semibold mb-4 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart ({getCartItemCount()} items)
                </h3>
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span className="flex-1 truncate">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold mb-3">
                    <span>Total:</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <button className="btn btn-primary w-full">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">{selectedCategoryData?.name}</h2>
              <p className="text-text-secondary">
                {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} available
              </p>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const cartItem = cart.find(cartItem => cartItem.id === item.id);
                return (
                  <div key={item.id} className="card group">
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to letter placeholder if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-accent-warm rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-coffee-dark text-4xl font-bold">
                          {item.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-coffee-medium transition-colors">
                      {item.name}
                    </h3>
                    
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-coffee-medium">
                        ${item.price.toFixed(2)}
                      </span>
                      
                      {cartItem ? (
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-coffee-light text-coffee-dark flex items-center justify-center hover:bg-coffee-medium hover:text-white transition-colors shadow-sm"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-semibold">{cartItem.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-coffee-light text-coffee-dark flex items-center justify-center hover:bg-coffee-medium hover:text-white transition-colors shadow-sm"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="btn btn-primary flex items-center"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No items found</h3>
                <p className="text-text-secondary">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Store Info Section */}
      <section className="section bg-cream-medium">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-lg text-text-secondary">
              Can't decide what to order? Come visit us for the full Brew Haven experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-text-secondary">{shopInfoData.address}</p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-text-secondary mb-2">{shopInfoData.phone}</p>
              <p className="text-text-secondary">{shopInfoData.email}</p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <div className="text-text-secondary text-sm space-y-1">
                <div>Mon-Fri: {shopInfoData.hours.monday}</div>
                <div>Sat: {shopInfoData.hours.saturday}</div>
                <div>Sun: {shopInfoData.hours.sunday}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeShop;