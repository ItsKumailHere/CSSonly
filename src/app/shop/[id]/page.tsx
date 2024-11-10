'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star, Heart } from 'lucide-react'
import { useCart } from '@/app/components/CardContext'
import styles from './product.module.css'

const products = [
  { id: '1', name: 'Premium Leather Jacket', price: 299.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400', description: 'Crafted from premium leather, this jacket features a timeless design with modern details. Perfect for any occasion, it offers both style and durability.' },
  { id: '2', name: 'Designer Sunglasses', price: 159.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400', description: "These designer sunglasses combine style and functionality. With UV protection and a sleek design, they're perfect for any outdoor activity." },
  { id: '3', name: 'Classic Watch', price: 499.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400', description: "This classic watch features a timeless design with modern functionality. Water-resistant and built to last, it's the perfect accessory for any outfit." },
]

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)
  const [selectedSize, setSelectedSize] = useState('M')
  const { addToCart } = useCart()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <div className={`container ${styles.product}`}>
      <div className={styles.productGrid}>
        <div className={styles.productImage}>
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
          <button className={styles.wishlistButton}>
            <Heart className={styles.wishlistIcon} />
          </button>
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <div className={styles.productRating}>
            <Star className={styles.starIcon} />
            <Star className={styles.starIcon} />
            <Star className={styles.starIcon} />
            <Star className={styles.starIcon} />
            <Star className={styles.starIconEmpty} />
            <span className={styles.reviewCount}>(4.8) 124 reviews</span>
          </div>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.sizeSelector}>
            <h3 className={styles.sizeTitle}>Select Size</h3>
            <div className={styles.sizeOptions}>
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${selectedSize === size ? styles.sizeButtonActive : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button onClick={handleAddToCart} className={`button ${styles.addToCartButton}`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}