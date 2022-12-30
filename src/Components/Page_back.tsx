import React from 'react';
import { PageSet } from '@/Common/PageSet';

const PageBack = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageSet className='face-back'>
      {children !== null ? children : undefined}
    </PageSet>
  );
};

export default PageBack;
