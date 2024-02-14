import React from 'react';
import styles from '@/styles/howto.module.css';
import Image from 'next/image';
import { MdAccessTime } from "react-icons/md";
import Link from 'next/link';

const HowTo = () => {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.leftSection}>

                    <div className={styles.howToBox}>
                        <h3>How To Box 1</h3>
                        <div className={styles.howToContent}>
                            <div className={styles.howtoimg}>
                                <Image src="/boximg.jpg" alt="Image 1" width={200} height={200}/>
                            </div>
                            <div className={styles.howtotext}>
                                <p>Description of the how-to goes here...</p>
                                <p> DECEMBER 16, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.howToBox}>
                        <h3>How To Box 1</h3>
                        <div className={styles.howToContent}>
                            <Image src="/boximg.jpg" alt="Image 1" width={200} height={200} />
                            <p>Description of the how-to goes here...</p>
                        </div>
                    </div>
                    <div className={styles.howToBox}>
                        <h3>How To Box 1</h3>
                        <div className={styles.howToContent}>
                            <Image src="/boximg.jpg" alt="Image 1" width={200} height={200} />
                            <p>Description of the how-to goes here...</p>
                        </div>
                    </div>
                    <div className={styles.howToBox}>
                        <h3>How To Box 1</h3>
                        <div className={styles.howToContent}>
                            <Image src="/boximg.jpg" alt="Image 1" width={200} height={200} />
                            <p>Description of the how-to goes here...</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.moreoptions}>
                        <h2>Top Lists Tech 2024</h2>
                        <Link href={'aboutus'} className={styles.options}>
                            <p><span className={styles.optiontext}>How to Replace Google Assistant with Gemini AI on Your Android Phone</span><span className={styles.optiontime}><MdAccessTime /> DECEMBER 16, 2023</span></p>
                        </Link>
                        <Link href={'aboutus'} className={styles.options}>
                            <p><span className={styles.optiontext}>How to Replace Google Assistant with Gemini AI on Your Android Phone</span><span className={styles.optiontime}><MdAccessTime /> DECEMBER 16, 2023</span></p>
                        </Link>
                        <Link href={'aboutus'} className={styles.options}>
                            <p><span className={styles.optiontext}>How to Replace Google Assistant with Gemini AI on Your Android Phone</span><span className={styles.optiontime}><MdAccessTime /> DECEMBER 16, 2023</span></p>
                        </Link>
                        <Link href={'aboutus'} className={styles.options}>
                            <p><span className={styles.optiontext}>How to Replace Google Assistant with Gemini AI on Your Android Phone</span><span className={styles.optiontime}><MdAccessTime /> DECEMBER 16, 2023</span></p>
                        </Link>
                        <Link href={'aboutus'} className={styles.options}>
                            <p><span className={styles.optiontext}>How to Replace Google Assistant with Gemini AI on Your Android Phone</span><span className={styles.optiontime}><MdAccessTime /> DECEMBER 16, 2023</span></p>
                        </Link>
                        <Link href={'aboutus'} className={styles.options}>
                            <p><span className={styles.optiontext}>How to Replace Google Assistant with Gemini AI on Your Android Phone</span><span className={styles.optiontime}><MdAccessTime /> DECEMBER 16, 2023</span></p>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HowTo;
