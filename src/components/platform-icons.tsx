import React from 'react';

interface PlatformIconProps {
  platform: 'aliexpress' | 'amazon' | 'shopify';
  size?: number;
  className?: string;
}

export function PlatformIcon({ platform, size = 48, className = '' }: PlatformIconProps) {
  const colors = {
    aliexpress: 'hsl(14 100% 60%)',
    amazon: 'hsl(213 94% 68%)',
    shopify: 'hsl(158 64% 52%)',
  };

  const icons = {
    aliexpress: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 2L44 13V35L24 46L4 35V13L24 2Z"
          fill={colors.aliexpress}
          opacity="0.9"
        />
        <path
          d="M24 14L28 16V20L24 22L20 20V16L24 14Z"
          fill="white"
          opacity="0.95"
        />
        <path
          d="M24 26L32 30V34L24 38L16 34V30L24 26Z"
          fill="white"
          opacity="0.95"
        />
      </svg>
    ),
    amazon: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 2L44 13V35L24 46L4 35V13L24 2Z"
          fill={colors.amazon}
          opacity="0.9"
        />
        <rect x="16" y="16" width="16" height="16" fill="white" opacity="0.95" />
        <path
          d="M20 20H28V22H20V20Z"
          fill={colors.amazon}
        />
        <path
          d="M20 26H28V28H20V26Z"
          fill={colors.amazon}
        />
      </svg>
    ),
    shopify: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 2L44 13V35L24 46L4 35V13L24 2Z"
          fill={colors.shopify}
          opacity="0.9"
        />
        <circle cx="24" cy="24" r="8" fill="white" opacity="0.95" />
        <path
          d="M24 18V30M18 24H30"
          stroke={colors.shopify}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return <div className={className}>{icons[platform]}</div>;
}

export function PlatformBadge({ platform, label }: { platform: 'aliexpress' | 'amazon' | 'shopify'; label?: string }) {
  const labels = {
    aliexpress: 'AliExpress',
    amazon: 'Amazon',
    shopify: 'Shopify',
  };

  return (
    <span className={`platform-badge ${platform}`}>
      <PlatformIcon platform={platform} size={16} />
      {label || labels[platform]}
    </span>
  );
}
