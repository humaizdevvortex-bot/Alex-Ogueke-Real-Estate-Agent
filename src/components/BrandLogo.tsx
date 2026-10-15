import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  const crestSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-11 h-11 sm:w-12 sm:h-12',
  };

  return (
    <div className="flex items-center gap-3 group select-none whitespace-nowrap">
      {/* Luxury Geometric Crest Monogram */}
      <div className={`relative ${crestSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          <defs>
            <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DF9E" />
              <stop offset="50%" stopColor="#DFC080" />
              <stop offset="80%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#9B772E" />
            </linearGradient>
            <linearGradient id="crestShield" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? '#1A293D' : '#0F1A2C'} />
              <stop offset="100%" stopColor={isDark ? '#0F1A2C' : '#080E18'} />
            </linearGradient>
          </defs>

          {/* Octagonal Shield */}
          <polygon
            points="50,4 94,26 94,74 50,96 6,74 6,26"
            fill="url(#crestShield)"
            stroke="url(#crestGold)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Architectural Initial "A" & "O" */}
          <circle
            cx="50"
            cy="52"
            r="22"
            stroke="url(#crestGold)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M50 28 L35 72 M50 28 L65 72"
            stroke="url(#crestGold)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M40 56 L60 56"
            stroke="url(#crestGold)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <polygon
            points="50,20 53,24 50,28 47,24"
            fill="url(#crestGold)"
          />
        </svg>
      </div>

      {/* Typography Wordmark - Crisp, No Cluttered Badges */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-extrabold tracking-[0.16em] uppercase text-sm sm:text-[15px] leading-tight transition-colors font-['Plus_Jakarta_Sans'] ${
              isDark ? 'text-white' : 'text-[#080E18]'
            }`}
          >
            Alex Ogueke
          </span>
          <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8C6D2D]">
            Realtor®
          </span>
        </div>

        {showSubtitle && (
          <p
            className={`text-[10px] tracking-wide font-medium mt-0.5 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Keller Williams South Bay <span className="text-[#C5A059] opacity-80">·</span> CalDRE #{' '}
            <span className="font-semibold text-gray-700">02079279</span>
          </p>
        )}
      </div>
    </div>
  );
};
