import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
    className?: string;
}

export function LargeSectionHeading({children, className = ""}: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 text-center ${className}`}>
        {children}
    </h2>
  )
}

export function MediumSectionHeading({children}: SectionHeadingProps) {
    return (
      <h2 className='text-2xl font-medium capitalize mb-8 text-center'>
          {children}
      </h2>
    )
}

export function SmallSectionHeading({children}: SectionHeadingProps) {
    return (
      <h2 className='text-xl font-medium capitalize mb-8 text-center'>
          {children}
      </h2>
    )
}

export function ExtraSmallSectionHeading({children, className = ""}: SectionHeadingProps) {
  return (
    <h2 className={`text-lg font-medium capitalize mb-8 text-center ${className}`}>
        {children}
    </h2>
  )
}


