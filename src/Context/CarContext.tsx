import React, { createContext, useState, useContext, ReactNode } from 'react'

interface Product {
  id: number
  name: string
  price: number
}

interface CartItem extends Product {
  quantity: number
}

interface CartContextData {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextData | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
