import Image from "next/image"
import styles from '@/styles/StatsCard.module.css'

interface StatsCard{
    cardTitle: string,
    cardDescription: string,
    icon: string,
    isLast?: boolean,
    isFirst?: boolean
}

export default function StatsCards({icon, isFirst, isLast, cardTitle, cardDescription}: StatsCard){

    const isShowLine : boolean = !isFirst && !isLast;
    return(
        <div className={`${styles.statsCard} ${styles.withLine}`}>
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