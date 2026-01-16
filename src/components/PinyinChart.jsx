import React, { useState } from 'react';
import { initials, finals, isValidSyllable, getDisplayPinyin, getPhonetic, pronunciationNotations } from '../pinyinData';
import TonePopover from './ToneModal';

const PinyinChart = ({ language, displayMode, onToggleMode }) => {
    const [selectedCell, setSelectedCell] = useState(null); // { pinyin, phonetic, anchorPosition }
    const [hoveredCell, setHoveredCell] = useState({ initial: null, final: null });

    const handleCellClick = (e, pinyin, phonetic) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSelectedCell({
            pinyin,
            phonetic,
            anchorPosition: rect
        });
    };

    // Helper to render a cell
    const renderCell = (initial, final) => {
        const valid = isValidSyllable(initial, final);

        // Highlight check logic
        const isRowHovered = hoveredCell.final === final;
        const isColHovered = hoveredCell.initial === initial;

        if (!valid) {
            return (
                <div
                    key={`${initial}-${final}`}
                    className={`cell empty-cell ${isRowHovered ? 'row-hover' : ''} ${isColHovered ? 'col-hover' : ''}`}
                    onMouseEnter={() => setHoveredCell({ initial, final })}
                    onMouseLeave={() => setHoveredCell({ initial: null, final: null })}
                >
                    {/* Empty */}
                </div>
            );
        }

        const pinyin = getDisplayPinyin(initial, final);
        const phonetic = getPhonetic(initial, final, language, displayMode);

        // Check active selection
        const isActive = selectedCell?.pinyin === pinyin;

        return (
            <div
                key={`${initial}-${final}`}
                className={`cell ${isActive ? 'cell-active' : ''} ${isRowHovered ? 'row-hover' : ''} ${isColHovered ? 'col-hover' : ''}`}
                title={`${pinyin} = ${phonetic}`}
                onClick={(e) => handleCellClick(e, pinyin, phonetic)}
                onMouseEnter={() => setHoveredCell({ initial, final })}
                onMouseLeave={() => setHoveredCell({ initial: null, final: null })}
            >
                <div className="pinyin-text">{pinyin}</div>
                <div className="phonetic-text">{phonetic}</div>
            </div>
        );
    };

    return (
        <>
            <TonePopover
                isOpen={!!selectedCell}
                onClose={() => setSelectedCell(null)}
                pinyin={selectedCell?.pinyin || ''}
                phonetic={selectedCell?.phonetic || ''}
                anchorPosition={selectedCell?.anchorPosition}
            />

            <div className="chart-container">
                <div className="pinyin-grid">
                    {/* Top Left Corner - Toggle Mode */}
                    <div
                        className="cell corner-cell corner-toggle"
                        onClick={onToggleMode}
                        title={`Click to ${displayMode === 'joined' ? 'Split' : 'Join'} Characters`}
                    >
                        {displayMode === 'joined' ? (
                            // Show Split Action (Chain Broken?) or just Split Icon
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 12h8" strokeDasharray="2 2" />
                                <path d="M4 12h2" />
                                <path d="M18 12h2" />
                                <line x1="12" y1="9" x2="12" y2="15" />
                            </svg>
                        ) : (
                            // Show Join Action (Chain Link)
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 12h10" />
                                <path d="M7 12l-2 0" strokeLinecap="round" />
                                <path d="M17 12l2 0" strokeLinecap="round" />
                                <path d="M10 12a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2z" />
                            </svg>
                        )}
                    </div>

                    {/* Header Row (Initials) */}
                    {initials.map(initial => (
                        <div
                            key={initial}
                            className={`cell header-row ${hoveredCell.initial === initial ? 'header-highlight' : ''}`}
                        >
                            <div className="pinyin-text">{initial}</div>
                            <div className="phonetic-text">{pronunciationNotations.initials[initial][language]}</div>
                        </div>
                    ))}

                    {/* Rows (Finals) */}
                    {finals.map(final => (
                        <React.Fragment key={final}>
                            {/* Header Column (Final) */}
                            <div
                                className={`cell header-col ${hoveredCell.final === final ? 'header-highlight' : ''}`}
                            >
                                <div className="pinyin-text">-{final}</div>
                                <div className="phonetic-text">{pronunciationNotations.finals[final][language]}</div>
                            </div>

                            {/* Data Cells (Iterate through Initials for this Final row) */}
                            {initials.map(initial => renderCell(initial, final))}

                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PinyinChart;
