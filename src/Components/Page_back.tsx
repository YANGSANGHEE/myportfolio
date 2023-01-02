import React from 'react';
import { PageSet } from '@/common/PageSet';

const PageBack = ({
  children,
  back,
}: {
  children: React.ReactNode;
  back: string;
}) => {
  return (
    <PageSet className={back}>
      {children !== null ? children : undefined}
    </PageSet>
  );
};

export default PageBack;
