import { useState } from 'react';
import ShortenedForm, { URLShortened } from "@/widgets/ShortenedForm";
import UrlList from './UrlList';
import styles from '@/styles/AdvancedStats.module.css'


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
                
            </section>
        </div>

    )
}