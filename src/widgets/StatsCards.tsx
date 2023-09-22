import Image from "next/image"
import styles from '@/styles/StatsCard.module.css'

interface StatsCard{
    cardTitle: string,
    cardDescription: string,
    icon: string
}

export default function StatsCards({icon, cardTitle, cardDescription}: StatsCard){
    return(
        <div className={styles.statsCard}>
            <div className={styles.statsCardImage}>
                <Image
                    src={icon}
                    alt="stats-card-image"
                    className={styles.image}
                    width={30}
                    height={30}
                />
            </div>
           
            <h3 className={styles.statsCardTitle}>
                {cardTitle}
            </h3>
            <p className={styles.statsCardDescription}>
                {cardDescription}
            </p>
        </div>
    )
}