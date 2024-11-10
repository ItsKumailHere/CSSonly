"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "../components/CardContext";
import styles from "./cart.module.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`container ${styles.cart}`}>
      <h1 className={styles.title}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
          <Link href="/shop" className={styles.button}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className={styles.cartGrid}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className={styles.itemImage}
                />
                <div className={styles.itemInfo}>
                  <h2 className={styles.itemName}>{item.name}</h2>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                  <p className={styles.itemQuantity}>
                    Quantity: {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  <Trash2 className={styles.removeIcon} />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.orderSummary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.summaryTotal}`}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className={`button ${styles.checkoutButton}`}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
