
import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const baseAnimation = 'transition-all duration-700 ease-out opacity-100';
    
    switch (direction) {
      case 'up':
        return `${baseAnimation} translate-y-0`;
      case 'down':
        return `${baseAnimation} translate-y-0`;
      case 'left':
        return `${baseAnimation} translate-x-0`;
      case 'right':
        return `${baseAnimation} translate-x-0`;
      default:
        return baseAnimation;
    }
  };

  const getInitialClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10';
      case 'down':
        return 'translate-y-[-10px]';
      case 'left':
        return 'translate-x-[-20px]';
      case 'right':
        return 'translate-x-20';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getInitialClass()} ${getAnimationClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
