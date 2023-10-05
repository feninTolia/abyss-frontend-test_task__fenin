import { IDragMoveProps } from '@/shared/types';
import React, { useEffect, useState } from 'react';

export default function DragMove({
  onPointerUp,
  onDragMove,
  children,
  style,
  className,
  onPointerDown = () => {},
}: IDragMoveProps) {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handlePointerUpGlobal = (e: PointerEvent) => {
      if (isDragging) {
        setIsDragging(false);
        onPointerUp(e as unknown as React.PointerEvent<HTMLDivElement>);
      }
    };

    const handlePointerMoveGlobal = (e: PointerEvent) => {
      if (isDragging) {
        onDragMove(e as unknown as React.PointerEvent<HTMLDivElement>);
      }
    };

    window.addEventListener('pointerup', handlePointerUpGlobal);
    window.addEventListener('pointermove', handlePointerMoveGlobal);

    return () => {
      window.removeEventListener('pointerup', handlePointerUpGlobal);
      window.removeEventListener('pointermove', handlePointerMoveGlobal);
    };
  }, [isDragging, onPointerUp, onDragMove]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    onPointerDown(e);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      style={style}
      className={`${className} cursor-move`}
    >
      {children}
    </div>
  );
}
