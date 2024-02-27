import React, { useState } from 'react';
import styles from '@/styles/howto.module.css';
import Image from 'next/image';
import { MdAccessTime } from "react-icons/md";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import Link from 'next/link';

const HowTo = () => {
    const [openSummaryIndex, setOpenSummaryIndex] = useState(-1);

    const toggleSummary = (index) => {
        setOpenSummaryIndex(openSummaryIndex === index ? -1 : index);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    {[1, 2, 3, 4, 5].map((index) => ( // Assuming you have 5 howToBox elements
                        <div className={styles.howToBox} key={index}>
                            <div className={styles.howToContent}>
                                <div className={styles.howtoimg}>
                                    <Image src="/boximg2.jpg" className={styles.Image} alt="Image 1" width={250} height={250} />
                                </div>
                                <div className={styles.howtotext}>
                                    <p>ONLYOFFICE DocSpace Brings Seamless Collaboration Within Zoom, and It’s All We Need</p>
                                    <p>
                                        <span> DECEMBER 16, 2023</span>
                                        <span onClick={() => toggleSummary(index)} className={styles.readmorelink}>
                                            <span>Summary</span> {openSummaryIndex === index ? <TfiAngleUp className={styles.readmore} /> : <TfiAngleDown className={styles.readmore} />}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: openSummaryIndex === index ? 'block' : 'none', padding: '10px' }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil similique provident quis perspiciatis fugiat quae odio, odit eveniet expedita.</p>
                            </div>
                        </div>
                    ))}
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
