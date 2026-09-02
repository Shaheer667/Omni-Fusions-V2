'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export default function CountUp({
  end,
  duration = 900,
  suffix = '+'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // fast start, smooth finish
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}