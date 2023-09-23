import { useState } from 'react';
import ShortenedForm, { URLShortened } from "@/widgets/ShortenedForm";
import UrlList from './UrlList';
import styles from '@/styles/AdvancedStats.module.css'
import StatsCards from '@/widgets/StatsCards';


export default function AdvancedStats(){
    const [urlList, setUrlList] = useState<URLShortened[]>([]);

  
    const handleDataFromChild = (data: URLShortened[]) => {
        setUrlList(data);
    };
    
    return (
        <div className='advanceStats'>
            <div className='container'>
                <ShortenedForm sendDataToParent={handleDataFromChild} urlList={urlList} />
                {
                    urlList.map((url, index) => (
                        <UrlList 
                        key={index} 
                        originalLink={url.result.original_link} 
                        shortLink={url.result.short_link}
                        />
                    ))
                }
            </div>
           
            <section className='container align-items-row'>
                <div className={styles.advancedStatsDetails}>
                    <h1 className={styles.advancedStatsTitle}>
                        Advanced Statistics
                    </h1>
                    <p className={styles.advancedStatsText}>Track how your links are 
                        performing across the web with
                        our advanced statistics dashboard
                    </p>
                </div>

                <div className={styles.statsCardContainer}>

                    <div className={`align-content-vertically gap-spacing ${styles.cardWrapper} `}>
                        <StatsCards
                            icon={'/images/icon-brand-recognition.svg'}
                            cardTitle='Brand Recognition'
                            isFirst={true}
                            cardDescription="Boost your brand recognition with each click. 
                            Generic links don't mean a thing. Branded links helps instil confidence in your content."
                        />

                        <StatsCards 
                            icon={'/images/icon-detailed-records.svg'}
                            cardTitle='Detailed Records'
                            cardDescription="Gain insights who is clicking your links. Knowing when and where people engage
                            with your content helps inform better decisions."
                        />

                        <StatsCards 
                            icon={'/images/icon-fully-customizable.svg'}
                            cardTitle='Fully Customizable'
                            isLast={true}
                            cardDescription="Improve brand awareness and content discoverability through 
                            customizable links, supercharging audience engagement."
                        />
                </div>
                </div>
            </section>
        </div>

    )
}