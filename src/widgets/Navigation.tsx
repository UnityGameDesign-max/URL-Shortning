import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Navigation.module.css';

export default function Navigation(){
    return(
        <nav className={`${styles.nav} gap-spacing align-content-vertically`}>
            <div className={'content-vertically gap-spacing'}>
                <Link className={styles.navLinks} href={'/'}>
                    <Image
                    src='/images/logo.svg'
                    width={70}
                    height={20}
                    alt='logo'
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
            
            <ul className='align-content-vertically gap-spacing'>
                {/* <Image 
                 src={'/images/'}
                 width={30}
                 height={30}
                 alt='hamMenu'
                /> */}
                <li className={styles.navAuthLink}>
                    <Link className={styles.navLinks} href='/'>Login</Link>
                </li>
                <li className={styles.navAuthLink}>
                    <button className="btn">Sign Up</button>
                </li>
            </ul>
        </nav>
    )
}