'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  isVisible,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-[--color-success] text-white',
    error: 'bg-[--color-error] text-white',
    warning: 'bg-[--color-warning] text-white',
    info: 'bg-[--color-primary] text-white',
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={cn(
        'flex items-center space-x-2 px-4 py-3 rounded-lg shadow-lg transition-all transform',
        typeStyles[type],
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
      )}>
        <span className="text-sm font-medium">{icons[type]}</span>
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-current hover:opacity-75"
        >
          ×
        </button>
      </div>
    </div>
  );
};