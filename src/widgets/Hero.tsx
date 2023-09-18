import Image from "next/image";
import styles from '@/styles/Hero.module.css';

export default function Hero(){
    return(
        <section className={`${styles.hero} space-between-items`}>
            <div className={styles.heroDetails}>
                <h1 className={styles.heroDetailsTitle}>More than just shorter links</h1>
                <p className={styles.heroDetailsText}> Build your brand's recognition and get detailed
                    insights on how your links are performing.
                </p>
                <button className='btn'>Get Started</button>  
            </div>
            <div className={styles.heroImage}>
                <Image
                    src='/images/illustration-working.svg'
                    width={1000}
                    height={500}
                    alt="working-illustration"
                    layout="responsive"
                />
            </div>
        </section>
    )
}