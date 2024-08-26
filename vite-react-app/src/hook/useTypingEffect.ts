// 메인 페이지 타이핑 효과 훅

import { useEffect, useState } from 'react';

const useTypingEffect = (texts: string[], delay: number = 100) => {
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        let currentTxtArr = texts[index].split('');
        let isDeleting = false;
        let typingTimeout: NodeJS.Timeout;

        const type = () => {
            if (isDeleting) {
                if (currentTxtArr.length) {
                    currentTxtArr.pop();
                    setCurrentText(currentTxtArr.join(''));
                } else {
                    isDeleting = false;
                    setIndex((prev) => (prev + 1) % texts.length);
                    currentTxtArr = texts[(index + 1) % texts.length].split('');
                }
            } else {
                if (currentTxtArr.length) {
                    setCurrentText((prev) => prev + currentTxtArr.shift());
                } else {
                    isDeleting = true;
                }
            }
            typingTimeout = setTimeout(type, Math.floor(Math.random() * delay));
        };

        type();

        return () => clearTimeout(typingTimeout);
    }, [index, texts, delay]);

    return currentText;
};

export default useTypingEffect;