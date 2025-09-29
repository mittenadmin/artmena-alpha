export interface Artist {
  id: string;
  name: string;
  bio: string;
  location: string;
  country: string;
  birthYear: number;
  category: string;
  imageUrl: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist_id: string;
  gallery_id?: string;
  category: string;
  medium: string;
  dimensions: string;
  year: number;
  price: string;
  description: string;
  imageUrl: string;
  status: 'available' | 'sold' | 'exhibition';
}

export interface Gallery {
  id: string;
  name: string;
  location: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  description: string;
  imageUrl: string;
  artist_ids: string[];
}

export interface Exhibition {
  id: string;
  title: string;
  gallery_id: string;
  startDate: string;
  endDate: string;
  openingHours: string;
  description: string;
  curatorStatement?: string;
  curators: string[];
  artwork_ids: string[];
  artist_ids: string[];
  imageUrl: string;
  status: 'upcoming' | 'current' | 'past';
}

export interface NewsArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  tags: string[];
}