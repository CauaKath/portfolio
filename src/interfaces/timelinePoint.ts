export interface ITimelinePoint {
  id: number;
  title: string;
  location: string;
  type: TimelinePointType;
  start: string;
  end: string;
}

export const enum TimelinePointType {
  WORK = 'work',
  EDUCATION = 'education',
  OTHER = 'other'
}