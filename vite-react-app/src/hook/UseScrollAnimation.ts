// 스크롤 애니메이션을 처리하는 훅

import { useEffect } from 'react';

const useScrollAnimation = () => {
    const handleScroll = (targetSelector: string) => {
        const targetEl = document.querySelector(targetSelector);
        if (targetEl) {
            const browerScrollY = window.pageYOffset;
            const targetScrollY = targetEl.getBoundingClientRect().top + browerScrollY;
            window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollMoveEls = document.querySelectorAll("[data-animation-scroll='true']");
        const handleClick = (e: Event) => {
            const target = (e.currentTarget as HTMLElement).dataset.target;
            if (target) {
                handleScroll(target);
            }
        };

        scrollMoveEls.forEach((el) => {
            el.addEventListener('click', handleClick);
        });

        return () => {
            scrollMoveEls.forEach((el) => {
                el.removeEventListener('click', handleClick);
            });
        };
    }, []);
};

export default useScrollAnimation;