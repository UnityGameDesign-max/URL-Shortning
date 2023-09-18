import styles from '@/styles/Shortened.module.css';

export default function ShortenedForm(){
    return(
        <>
            <div className="form-pattern content-vertically gap-spacing ">
                
                <input
                    type="text"
                    className={styles.shortenedInput}
                    placeholder="Shorten a link here..."
                />
                
                
                <button className={`btn-secondary btn ${styles.shortenedBtn}`}>Shortened it!</button>
            </div>
        </>

        
    )
}