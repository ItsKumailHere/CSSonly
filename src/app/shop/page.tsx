'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import styles from './shop.module.css'

const products = [
  { id: '1', name: 'Premium Leather Jacket', price: 299.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Designer Sunglasses', price: 159.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Classic Watch', price: 499.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400' },
]

export default function Shop() {
  return (
    <div className={`container ${styles.shop}`}>
      <h1 className={styles.title}>Shop All Products</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link href={`/shop/${product.id}`}>
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
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}