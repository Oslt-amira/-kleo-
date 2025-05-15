export interface TimeSelection {
    time: Date | null;
    positionY: number | null;
  }
  
  export interface StudySession {
    [x: string]: any; // for resize purposes , I'll change it later when I integrate some other shit 
    [x: string]: any;
    title?: string;
    timeRange: { start: string | Date; end: string | Date };
    type?: string;
    subject?: string;
  }