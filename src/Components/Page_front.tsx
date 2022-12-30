import React from 'react';
import { PageSet } from '@/Common/PageSet';

const PageFront = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageSet className='face-front'>
      {children !== null ? children : undefined}
    </PageSet>
  );
};

export default PageFront;
