import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
  fullWidth?: boolean;
}

const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'lg',
  container = true,
  fullWidth = false,
}: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    dark: 'bg-gray-900 text-white',
  };

  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-32',
  };

  const classes = [
    backgrounds[background],
    paddings[padding],
    className,
  ].join(' ');

  const content = container ? (
    <div className={`${fullWidth ? 'w-full' : 'container mx-auto px-4'}`}>
      {children}
    </div>
  ) : (
    children
  );

  return (
    <section id={id} className={classes}>
      {content}
    </section>
  );
};

export default Section; 