export type {
  Service,
  SimulatorOption,
  TimelineStep,
  CareChecklistItem,
  AuthorityBadge,
  GalleryResultItem,
  ContactInfo
} from './lib/site-data';

// Backward compatibility aliases
export type Modality = import('./lib/site-data').Service;
export type GalleryItem = import('./lib/site-data').GalleryResultItem;
export type Pillar = {
  number: string;
  title: string;
  description: string;
};
export type TestimonialItem = {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  date?: string;
};
