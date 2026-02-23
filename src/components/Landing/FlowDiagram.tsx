import React from 'react';
import styles from './FlowDiagram.module.css';

const FlowDiagram: React.FC = () => {
    return (
        <section className={styles.diagramSection}>
            <div className={styles.diagramContainer}>
                {/* Background SVG with rings and flow indicators */}
                <svg
                    className={styles.backgroundSvg}
                    viewBox="0 0 1200 400"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                >
                    {/* Concentric rings around vault (center at 600, radius grows) */}
                    <circle cx="600" cy="200" r="150" fill="none" stroke="rgba(13, 235, 213, 0.15)" strokeWidth="1" />
                    <circle cx="600" cy="200" r="130" fill="none" stroke="rgba(13, 235, 213, 0.1)" strokeWidth="1" />
                    <circle cx="600" cy="200" r="110" fill="none" stroke="rgba(13, 235, 213, 0.08)" strokeWidth="1" />
                    <circle cx="600" cy="200" r="90" fill="none" stroke="rgba(13, 235, 213, 0.05)" strokeWidth="1" />

                    {/* Flow indicators: subtle glowing dots/trails */}
                    {/* Left to center flow */}
                    <circle cx="250" cy="195" r="2" fill="#0debd5" opacity="0.6" />
                    <circle cx="350" cy="195" r="2" fill="#0debd5" opacity="0.4" />
                    <circle cx="450" cy="195" r="2" fill="#0debd5" opacity="0.2" />

                    {/* Center to right flow */}
                    <circle cx="750" cy="205" r="2" fill="#0debd5" opacity="0.2" />
                    <circle cx="850" cy="205" r="2" fill="#0debd5" opacity="0.4" />
                    <circle cx="950" cy="205" r="2" fill="#0debd5" opacity="0.6" />

                    {/* Glow filters */}
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                {/* Card/Node: User Wallet */}
                <div className={styles.node}>
                    <div className={styles.nodeBox}>
                        <div className={styles.nodeLabel}>USER</div>
                        <div className={styles.nodeTitle}>Wallet</div>
                    </div>
                </div>

                {/* Card/Node: Smart Contract Vault (Center) */}
                <div className={`${styles.node} ${styles.nodeVault}`}>
                    <svg className={styles.ringsSvg} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                        {/* Pulsing rings for vault emphasis */}
                        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(13, 235, 213, 0.25)" strokeWidth="1" />
                        <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(13, 235, 213, 0.18)" strokeWidth="1" />
                        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(13, 235, 213, 0.12)" strokeWidth="1" />
                    </svg>
                    <div className={styles.nodeBox}>
                        <div className={styles.nodeLabel}>SMART CONTRACT</div>
                        <div className={styles.nodeTitle}>Vault</div>
                    </div>
                </div>

                {/* Card/Node: Receives Merchant */}
                <div className={styles.node}>
                    <div className={styles.nodeBox}>
                        <div className={styles.nodeLabel}>RECEIVES</div>
                        <div className={styles.nodeTitle}>Merchant</div>
                    </div>
                </div>
            </div>

            {/* Accessibility caption */}
            {/* <div className={styles.caption}>
                User deposits USDC to vault; vault releases funds to merchant on subscription intervals.
            </div> */}
        </section>
    );
};

export default FlowDiagram;
