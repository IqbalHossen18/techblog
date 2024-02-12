import React from 'react';
import styles from '@/styles/howto.module.css';
import Image from 'next/image';

const HowTo = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        {/* Your how-to boxes */}
                        <div className={styles.howToBox}>
                            <h3>How To Box 1</h3>
                            <div className={styles.howToContent}>
                                <Image src="/boximg.jpg" alt="Image 1" width={200} height={200} />
                                <p>Description of the how-to goes here...</p>
                            </div>
                        </div>
                        {/* Add other how-to boxes here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowTo;
