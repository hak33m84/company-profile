import { MoveUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const ScrollUp = () => {
  return (
    <Button
      variant='outline'
      size='icon'
      asChild
      className='bg-base-background fixed right-10 bottom-10'
    >
      <Link href='#hero'>
        <MoveUp />
      </Link>
    </Button>
  );
};

export default ScrollUp;
