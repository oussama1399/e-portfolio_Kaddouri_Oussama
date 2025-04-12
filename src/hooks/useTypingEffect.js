import { useEffect } from 'react';

function useTypingEffect(elementRef, text, speed = 50) {
  useEffect(() => {
    if (!elementRef.current) return;

    let i = 0;
    elementRef.current.innerHTML = '';

    const typeWriter = () => {
      if (i < text.length) {
        elementRef.current.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        elementRef.current.classList.add('blinking-cursor');
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [elementRef, text, speed]);
}

export default useTypingEffect;
