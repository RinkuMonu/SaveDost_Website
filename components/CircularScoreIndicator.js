import React, { useState, useEffect, useRef, useId } from "react";

const CircularScoreIndicator = ({
  score = 806,
  maxScore = 1000,
  instant = false, // set to true right after form submit
  ratingLabel = "Excellent", // visible + announced
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  const rafRef = useRef(null);
  const currentScoreRef = useRef(0);
  const animationDuration = 1500;

  // Unique IDs for a11y
  const titleId = useId();
  const descId = useId();

  // keep ref in sync with state
  useEffect(() => {
    currentScoreRef.current = animatedScore;
  }, [animatedScore]);

  useEffect(() => {
    // If we want instant result (e.g., right after submit), skip anim altogether
    if (instant || animationDuration === 0) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setAnimatedScore(score);
      return;
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const startValue = currentScoreRef.current;
    const targetValue = score;
    const duration = animationDuration;

    let startTime = null;

    const animate = (ts) => {
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const next = Math.round(startValue + (targetValue - startValue) * eased);

      setAnimatedScore(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [score, instant, animationDuration]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const safeMax = Math.max(1, maxScore);
  const scorePercentage = Math.min(1, Math.max(0, animatedScore / safeMax));
  const strokeDashoffset = circumference - scorePercentage * circumference;

  const arrowAngle = scorePercentage * 360 - 90;
  const arrowX = 110 + radius * Math.cos((arrowAngle * Math.PI) / 180);
  const arrowY = 105 + radius * Math.sin((arrowAngle * Math.PI) / 180);
  const headX = 45 + radius * Math.cos(((arrowAngle - 90) * Math.PI) / 180);
  const headY = -15 + radius * Math.sin(((arrowAngle - 90) * Math.PI) / 180);

  return (
    <div className="relative w-[300px] sm:w-[350px] md:w-[450px] h-[300px] sm:h-[350px] md:h-[450px] rounded-full mx-auto">
      {/* Screen-reader live announcement */}
      <div className="sr-only" aria-live="polite">
        Score {animatedScore} of {maxScore}. {ratingLabel}.
      </div>

      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
      >
        <title id={titleId}>
          Score {animatedScore} of {maxScore}
        </title>
        <desc id={descId}>
          Circular indicator with a gradient ring and pointer showing the score percentage.
        </desc>

        <circle cx="100" cy="100" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="8" />

        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03DF7F" />
            <stop offset="33%" stopColor="#00A3FF" />
            <stop offset="66%" stopColor="#7051A1" />
            <stop offset="100%" stopColor="#E10042" />
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 100 100)"
        />

        <g transform={`translate(${headX}, ${headY})`}>
          <circle r="10" fill="url(#scoreGradient)" />
          <circle r="6" fill="none" stroke="white" strokeWidth="2" />
        </g>

        <g transform={`translate(${arrowX}, ${arrowY}) rotate(${arrowAngle + 90})`}>
          <polygon points="0,0 -8,10 8,10" fill="#000" />
        </g>

        <circle cx="100" cy="100" r="8" fill="#4f46e5" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#F8FBFD] to-[#FAFAFA] shadow-xl rounded-full">
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 shadow-[0_4px_36px_rgba(0,0,0,0.1)] rounded-full">
            <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800">
              {animatedScore}
            </span>
            <span className="text-base sm:text-lg md:text-xl font-semibold text-green-600 mt-2">
              {ratingLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularScoreIndicator;
