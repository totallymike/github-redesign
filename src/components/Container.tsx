import React from 'react';
import cn from 'classnames';

export interface ContainerProps {
  className?: string | string[];
  large?: boolean;
}
export const Container: React.FunctionComponent<ContainerProps> = ({ children, className, large }) => {
  const containerClass = large ? 'container-lg' : 'container';
  return (
    <div className={cn(containerClass, className)}>
      {children}
    </div>
  )
}