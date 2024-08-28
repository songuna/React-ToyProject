import { useState, useEffect, useRef } from 'react';

const useTypingEffect = (texts: string[], delay: number = 100) => {
    const [currentText, setCurrentText] = useState(''); // 현재 화면에 표시되는 텍스트 저장, currentText를 업데이트 하는 함수
    const [index, setIndex] = useState(0); // texts 배열에서 현재 타이핑할 문자열의 인덱스를 저장, index를 업데이트 하는 함수
    const [isDeleting, setIsDeleting] = useState(false); //현재 타이핑 모드인지 삭제 모드인지 구분하는 상태, isDeleting을 업데이트하는 함수
    const typingTimeoutRef = useRef<number | null>(null); //타이머 ID를 저장하는 참조하고 타이머를 정리할 때 사용 
    const currentTextRef = useRef<string>(''); // currentText의 값을 저장

    useEffect(() => {
        const currentTxtArr = texts[index].split('');
        currentTextRef.current = '';
        // 현재 인덱스의 텍스트를 문자 배열로 변환하고 빈 문자열로 초기화 시킨다

        const type = () => {
            if (isDeleting) {
                if (currentTxtArr.length > 0) {
                    currentTxtArr.pop();
                    currentTextRef.current = currentTxtArr.join('');
                    setCurrentText(currentTextRef.current);
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length);
                    currentTextRef.current = '';
                }
            } else {
                if (currentTxtArr.length > 0) {
                    currentTextRef.current += currentTxtArr.shift();
                    setCurrentText(currentTextRef.current);
                } else {
                    setIsDeleting(true);
                }
            }

            const timerDelay = Math.floor(Math.random() * delay);
            typingTimeoutRef.current = window.setTimeout(type, isDeleting ? timerDelay : Math.max(timerDelay, 50));
        };
        
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = window.setTimeout(type, delay);

        // useEffect의 반환 함수에서 타이머를 정리합니다.
        // 컴포넌트가 언마운트되거나 의존성 배열의 값이 변경될 때 실행
        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, [index, isDeleting, texts, delay]);

    return currentText;
};

export default useTypingEffect;