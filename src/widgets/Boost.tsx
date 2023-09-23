import styles from '@/styles/Boost.module.css';

export default function Boost(){
    return(
        <div className='boost-pattern'>
            <div className="container align-items-row">
                <h1 className={` ${styles.boostTitle} title`}>Boost your links today</h1>
                <button className='btn'>Get Started</button>
            </div>
        </div>
    )
}