export interface AcademicCard {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface Facility {
  id: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imageUrl: string;
}

export interface Notice {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  circularNo?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  pillar: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface HouseInfo {
  id: string;
  name: string;
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  motto: string;
  symbol: string;
  description: string;
  houseMaster: string;
}

export interface BusRoute {
  routeNumber: string;
  routeName: string;
  majorStops: string[];
  timing: string;
  vehicleType: string;
}

export interface MandatoryDoc {
  slNo: number;
  title: string;
  documentType: string;
  status: string;
}
