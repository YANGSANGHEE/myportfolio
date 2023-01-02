import React from 'react';
import { PageSet } from '@/common/PageSet';

const PageFront = ({
  children,
  front,
}: {
  children: React.ReactNode;
  front: string;
}) => {
  return (
    <PageSet className={front}>
      {children !== null ? children : undefined}
    </PageSet>
  );
};

export default PageFront;
