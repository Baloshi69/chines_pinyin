import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { getTones } from '../pinyinData';

const TonePopover = ({ pinyin, phonetic, isOpen, onClose, anchorPosition }) => {
    const audioRefs = useRef({});
    const popoverRef = useRef(null);
    const [style, setStyle] = useState({});
    const [placement, setPlacement] = useState('bottom');
    const [playingTone, setPlayingTone] = useState(null);

    useEffect(() => {
        if (!pinyin || !isOpen) return;

        const safePinyin = pinyin.replace('ü', 'v');
        const newAudioRefs = {};
        for (let i = 1; i <= 4; i++) {
            const url = `https://cdn.yoyochinese.com/audio/pychart/${safePinyin}${i}.mp3`;
            const audio = new Audio(url);
            audio.preload = 'auto';
            newAudioRefs[i] = audio;
        }
        audioRefs.current = newAudioRefs;
        return () => {
            Object.values(newAudioRefs).forEach(a => { a.pause(); a.currentTime = 0; });
        };
    }, [pinyin, isOpen]);

    useLayoutEffect(() => {
        if (!isOpen || !anchorPosition || !popoverRef.current) return;

        const { top, left, width: triggerWidth, height: triggerHeight } = anchorPosition;
        const popoverRect = popoverRef.current.getBoundingClientRect();
        const gap = 10;

        const spaceBelow = window.innerHeight - (top + triggerHeight);
        let newTop, newLeft, newPlacement;

        if (spaceBelow < popoverRect.height + gap && top > popoverRect.height + gap) {
            newPlacement = 'top';
            newTop = top - popoverRect.height - gap;
        } else {
            newPlacement = 'bottom';
            newTop = top + triggerHeight + gap;
        }

        newLeft = left + (triggerWidth / 2) - (popoverRect.width / 2);
        if (newLeft < 10) newLeft = 10;
        if (newLeft + popoverRect.width > window.innerWidth - 10) {
            newLeft = window.innerWidth - popoverRect.width - 10;
        }

        setStyle({ top: newTop, left: newLeft });
        setPlacement(newPlacement);
    }, [isOpen, anchorPosition]);

    if (!isOpen) return null;

    const tones = getTones(pinyin);

    const playAudio = (toneNumber) => {
        const audio = audioRefs.current[toneNumber];
        if (audio) {
            setPlayingTone(toneNumber);
            audio.currentTime = 0;
            audio.play().catch(e => console.error(e));
            audio.onended = () => setPlayingTone(null);
        }
    };

    const toneLabels = ['1st', '2nd', '3rd', '4th'];

    return (
        <>
            <div className="popover-backdrop" onClick={onClose}></div>
            <div className={`popover-card ${placement}`} ref={popoverRef} style={style} onClick={e => e.stopPropagation()}>
                <button className="popover-close" onClick={onClose}>×</button>

                <div className="popover-header">
                    <span className="popover-pinyin">{pinyin}</span>
                    <span className="popover-phonetic">{phonetic}</span>
                </div>

                <div className="popover-tones">
                    {tones.slice(0, 4).map((t, index) => (
                        <button
                            key={index}
                            className={`tone-btn ${playingTone === index + 1 ? 'playing' : ''}`}
                            onClick={() => playAudio(index + 1)}
                        >
                            <div className="tone-info">
                                <span className="tone-char">{t}</span>
                                <span className="tone-label">{toneLabels[index]}</span>
                            </div>
                            <div className="play-btn">
                                {playingTone === index + 1 ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <rect x="6" y="4" width="4" height="16" rx="1" />
                                        <rect x="14" y="4" width="4" height="16" rx="1" />
                                    </svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TonePopover;
