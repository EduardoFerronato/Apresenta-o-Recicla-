import { ReactNode } from 'react';

export enum SlideType {
  COVER = 'COVER',
  TitleText = 'TITLE_TEXT',
  BULLETS = 'BULLETS',
  SPLIT = 'SPLIT',
  FLOWCHART = 'FLOWCHART',
  TECH_STACK = 'TECH_STACK',
  CLOSING = 'CLOSING'
}

export interface SlideData {
  id: number;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string | string[];
  image?: string;
  extraData?: any;
}

export interface SlideProps {
  data: SlideData;
  isActive: boolean;
}