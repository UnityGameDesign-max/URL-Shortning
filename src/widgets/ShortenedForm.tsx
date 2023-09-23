import styles from '@/styles/Shortened.module.css';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const BASE_URL = 'https://api.shrtco.de/v2/shorten?url=';


const schema = yup.object()
    .shape({
    shortenedLink: yup.string().required('Please add link'),
})

interface ChildUrlProp{
    urlList: URLShortened[];
    sendDataToParent: (data: Array<URLShortened>) => void;
}

export interface URLShortened {
    ok: boolean,
    result: {
        code: string
        full_share_link: string
        full_short_link: string 
        full_short_link2: string
        full_short_link3: string
        original_link: string
        share_link: string
        short_link: string
        short_link2: string
        short_link3: string
    }
}

export default function ShortenedForm({ sendDataToParent }: ChildUrlProp){
    
    const [shortenedLink, setShortenedLink] = useState<string>('');
    const [url, setUrl] = useState<URLShortened[]>([]);

    const { register,formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async () => {
        try{
            const response = await fetch(`${BASE_URL}${shortenedLink}`, {
                method: 'POST',
            })
            const responseData : URLShortened = await response.json();
            setUrl([...url, responseData]);
            sendDataToParent([...url, responseData]);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <>
        <form 
            className="form-pattern"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={`${styles.formUrl} content-vertically gap-spacing`}>
                <input
                    type="text"
                    className={
                        errors.shortenedLink ? styles.inputError 
                        : styles.shortenedInput
                    }
                    placeholder="Shorten a link here..."
                    value={shortenedLink}
                    {...register('shortenedLink')}
                    onChange={
                        (e:ChangeEvent<HTMLInputElement>) => setShortenedLink(e.target.value)
                    }
                />
                <button 
                 type='submit' 
                 className={
                    `btn-secondary btn ${styles.shortenedBtn}`
                 }
                 >
                    Shortened it!
                </button>
            </div>

            <small className={styles.urlError}>
                {errors.shortenedLink?.message}
            </small>
           
        </form>

        </>
    )
}