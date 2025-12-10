import { ReactNode } from "react";

export interface AnimatedComponentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface CardData {
  id: string;
  title: string;
  creator: string;
  views: string;
  image: string;
  tags: string[];
}
