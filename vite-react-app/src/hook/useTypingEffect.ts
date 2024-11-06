import { useState, useEffect, useRef } from 'react';

const useTypingEffect = (texts: string[], delay: number = 100) => {
    const [currentText, setCurrentText] = useState(''); // 현재 화면에 표시되는 텍스트 저장
    const [index, setIndex] = useState(0); // 현재 타이핑할 텍스트 인덱스
    const [isDeleting, setIsDeleting] = useState(false); // 타이핑 중인지 삭제 중인지 구분
    const typingTimeoutRef = useRef<number | null>(null); // 타이머 ID를 저장
    const currentTextRef = useRef<string>(''); // 타이핑 중인 텍스트 상태 저장

    useEffect(() => {
        const currentTxtArr = texts[index].split(''); // 텍스트를 배열로 변환
        currentTextRef.current = ''; // currentText 초기화

        const type = () => {
            let updatedText = currentTextRef.current; // 텍스트 상태 복사

            if (isDeleting) {
                // 삭제 중일 때
                if (updatedText.length > 0) {
                    updatedText = updatedText.slice(0, updatedText.length - 1); // 마지막 문자 제거
                    setCurrentText(updatedText);
                } else {
                    // 삭제 완료 후 새로운 텍스트로 변경
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length);
                    currentTextRef.current = '';
                }
            } else {
                // 타이핑 중일 때
                if (updatedText.length < currentTxtArr.length) {
                    updatedText += currentTxtArr[updatedText.length]; // 한 글자씩 추가
                    setCurrentText(updatedText);
                } else {
                    // 타이핑이 끝나면 삭제 시작
                    setIsDeleting(true);
                }
            }

            const timerDelay = Math.floor(Math.random() * delay);
            typingTimeoutRef.current = window.setTimeout(type, isDeleting ? timerDelay : Math.max(timerDelay, 50)); // 타이핑/삭제 딜레이
        };

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current); // 이전 타이머 정리
        }

        typingTimeoutRef.current = window.setTimeout(type, delay); // 타이핑 시작

        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current); // 컴포넌트 언마운트 시 타이머 정리
            }
        };
    }, [index, isDeleting, texts, delay]);

    return currentText;
};

export default useTypingEffect;
