import { FC, MouseEvent } from 'react';
import cntl from 'cntl';

type ScrollDirection = 'left' | 'right';

type ScrollButtonProps = {
  scroll: (direction: ScrollDirection) => (event: MouseEvent<HTMLDivElement>) => void;
  direction: ScrollDirection;
};

const ScrollButton: FC<ScrollButtonProps> = ({ direction, scroll }) => {
  return (
    <div onClick={ scroll(direction) } className={ cntl`
      w-12
      ${ { left: 'arrow-left', right: 'arrow-right' }[direction] }
    ` }></div>
  );
};

export default ScrollButton;
