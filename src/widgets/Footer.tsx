import Image from "next/image";
import styles from '@/styles/Footer.module.css';
export default function Footer(){
    return(
        <div className='footer'>
            <div className={`${styles.footerContent} 
             container space-between-items`}
            >
                <Image
                    className={styles.footerImage}
                    src={'/images/logo-footer.svg'}
                    alt="shortly-logo"                                                                                                    
                    width={100}
                    height={25}
                />

                <div className={`${styles.footerLink} gap-spacing align-content-vertically`}>
                    <div className="features align-items">
                        <h3>Features</h3>
                        <a className={`${styles.link}`} href='#'>Link Shortening</a>
                        <a className={`${styles.link}`} href='#'>Branded Links</a>
                        <a className={`${styles.link}`} href='#'>Analytics</a>
                    </div>
                    <div className="resources align-items">
                        <h3>Resources</h3>
                        <a className={`${styles.link}`} href='#'>Blog</a>
                        <a className={`${styles.link}`} href='#'>Developers</a>
                        <a className={`${styles.link}`} href='#'>Support</a>
                    </div>
                    <div className={`${styles.company} align-items`}>
                        <h3>Company</h3>
                        <a className={`${styles.link}`} href='#'>About</a>
                        <a className={`${styles.link}`} href='#'>Our Team</a>
                        <a className={`${styles.link}`} href='#'>Careers</a>
                    </div>
                </div>

                <div className="socialLinks content-vertically gap-spacing">
                    <a href="#">
                        <Image 
                            src={'/images/icon-facebook.svg'}
                            alt="face-icon"
                            width={20}
                            height={20}
                        />
                    </a>
                   
                   <a href="#">
                        <Image 
                            src={'/images/icon-twitter.svg'}
                            alt="face-icon"
                            width={20}
                            height={20}
                        />
                   </a>
                    
                    <a href="#">
                        <Image 
                        src={'/images/icon-pinterest.svg'}
                        alt="face-icon"
                        width={20}
                        height={20}
                        />
                    </a>
                   
                   <a href="#">
                        <Image 
                        src={'/images/icon-instagram.svg'}
                        alt="face-icon"
                        width={20}
                        height={20}
                        />
                   </a>
                </div>
            </div>
        </div>
    )
}