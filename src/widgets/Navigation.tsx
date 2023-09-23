import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Navigation.module.css';

export default function Navigation(){
    return(
        <nav className={`${styles.nav} gap-spacing align-content-vertically`}>
            <div className={`${styles.navLeft} content-vertically gap-spacing`}>
                <Link className={styles.navLinks} href={'/'}>
                    <Image
                    src='/images/logo.svg'
                    width={70}
                    height={20}
                    alt='logo'
                    layout="responsive"
                    />
                </Link>

                <Link className={styles.navLinks} href='/'>
                    Features
                </Link>

                <Link className={styles.navLinks} href='/'>
                    Pricing
                </Link>

                <Link className={styles.navLinks} href='/'>
                    Resources
                </Link>

            </div>
            
            <ul className={`${styles.navRight} align-content-vertically gap-spacing`}>
                <li className={styles.navAuthLink}>
                    <Link className={styles.navLinks} href='/'>Login</Link>
                </li>
                <li className={styles.navAuthLink}>
                    <button className="btn">Sign Up</button>
                </li>
            </ul>
            <Link className={styles.hamMenu} href='#'>
                <Image
                    src={'/images/ham-menu-mobile.svg'}
                    alt="ham-menu"
                    width={30}
                    height={30}
                />
            </Link>
           
        </nav>
    )
}