'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const categories = [
  { name: 'New Arrivals', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Best Sellers', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600' },
  { name: 'Collections', image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=600' },
]

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Fashion"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover Luxury Fashion</h1>
          <p className={styles.heroSubtitle}>Explore our curated collection of premium fashion items.</p>
          <Link href="/shop" className={`button ${styles.heroButton}`}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className={`container ${styles.featuredCategories}`}>
        <h2 className={styles.sectionTitle}>Featured Categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div key={category.name} className={styles.categoryCard}>
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
