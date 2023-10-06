'use client';
import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const MyContext = createContext({
  zoom: 100,
  setZoom: (value: SetStateAction<number>) => {},
});

export function useZoomContext() {
  return useContext(MyContext);
}

export function ZoomContextProvider({ children }: PropsWithChildren) {
  const [zoom, setZoom] = useState(100);

  return (
    <MyContext.Provider value={{ zoom, setZoom }}>
      {children}
    </MyContext.Provider>
  );
}
