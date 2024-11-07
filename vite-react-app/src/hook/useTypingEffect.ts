import { useState, useEffect, useRef } from 'react';

const useTypingEffect = (texts: string[], delay: number = 100) => {
  const [currentText, setCurrentText] = useState(''); // 현재 화면에 표시되는 텍스트
  const [index, setIndex] = useState(0); // 현재 표시 중인 텍스트의 인덱스
  const [isDeleting, setIsDeleting] = useState(false); // 현재 타이핑 상태 (타이핑 중 vs 삭제 중)
  const typingTimeoutRef = useRef<number | null>(null); // 타이핑 타이머의 ID를 저장

  useEffect(() => {
    const currentTxtArr = texts[index].split(''); // 현재 텍스트를 문자 배열로 변환

    const type = () => {
      setCurrentText((prevText) => {
        if (isDeleting) {
          if (prevText.length > 0) {
            return prevText.slice(0, -1); // 마지막 문자 제거하여 텍스트 길이를 줄임
          } else {
            setIsDeleting(false); // 텍스트 삭제가 완료되면 타이핑 모드로 전환
            setIndex((prevIndex) => (prevIndex + 1) % texts.length); // 다음 텍스트로 이동
          }
        } else {
          if (prevText.length < currentTxtArr.length) {
            return prevText + currentTxtArr[prevText.length]; // 다음 문자 추가
          } else {
            setIsDeleting(true); // 타이핑 완료 후 삭제 모드로 전환
          }
        }
        return prevText;
      });
 
      const timerDelay = isDeleting ? delay / 2 : delay; //절반 속도로 설정해 타이핑보다 빠르게 삭제
      typingTimeoutRef.current = window.setTimeout(type, timerDelay);
    };

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);  // 이전 타이머를 제거
    }
    typingTimeoutRef.current = window.setTimeout(type, delay); // 새로운 타이머 시작

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current); // 컴포넌트 언마운트 시 타이머 정리
      }
    };
  }, [index, isDeleting, texts, delay]); // index, isDeleting, texts, delay가 변경될 때마다 재실행

  return currentText;
};

export default useTypingEffect;
