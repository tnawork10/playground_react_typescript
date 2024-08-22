import { createContext } from 'react';

type PartialContentContextData = {
  data: any;
  rangeStart: number;
  setRangeStart: (e: number) => void;
  rangeEnd: number;
  setRangeEnd: (e: number) => void;
  options: any;
  setOptions: (a: any) => void;
};

export const PartialContentContext = createContext<PartialContentContextData>({} as PartialContentContextData);