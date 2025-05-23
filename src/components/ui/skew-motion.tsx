'use client';

import { Slot } from '@radix-ui/react-slot';
import { HTMLMotionProps, motion } from 'motion/react';
import React from 'react';

interface SkewMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const SkewMotion: React.FC<SkewMotionProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  asChild,
  ...motionProps
}) => {
  const Comp = asChild ? MotionSlot : MotionDiv;

  return (
    <Comp
      animate={{ skewX: -7 }}
      transition={{ duration, delay }}
      {...motionProps}
    >
      {children}
    </Comp>
  );
};

export default SkewMotion;
