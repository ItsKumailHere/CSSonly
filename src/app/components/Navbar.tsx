"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, ShoppingCart } from "lucide-react";
import { useCart } from "./CardContext";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/shop", icon: ShoppingBag, label: "Shop" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cartItems } = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          LUXE
        </Link>
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navItem}>
              <item.icon className={styles.icon} />
              <span className="sr-only">{item.label}</span>
              {pathname === item.href && (
                <div className={styles.activeIndicator} />
              )}
            </Link>
          ))}
          <Link href="/cart" className={styles.navItem}>
            <div className={styles.cartIcon}>
              <ShoppingCart className={styles.icon} />
              {cartItems.length > 0 && (
                <span className={styles.cartBadge}>{cartItems.length}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
