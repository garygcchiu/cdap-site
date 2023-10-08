import React from 'react';

interface InViewAnchorProps {
    ref: React.RefObject<HTMLDivElement>;
}

export const InViewAnchor = React.forwardRef<HTMLDivElement, Omit<InViewAnchorProps, 'ref'>>(
    (props, ref) => (
        <div
            ref={ref}
            style={{ height: '1px', width: '100%', position: 'relative', top: '50vh' }}
        />
    )
);
InViewAnchor.displayName = 'InViewAnchor';
