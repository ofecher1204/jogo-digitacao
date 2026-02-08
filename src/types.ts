export type EnglishCategory = 'food' | 'travel' | 'technology' | 'daily_life' | 'arts' | 'nature' | 'science' | 'business';

export type SphereOfUse = 'academic' | 'business' | 'casual' | 'crative' | 'technical';

export interface LearningUnit {
  id: string; // UUID or descriptive slug
  domain: 'english'; 
  sphere: SphereOfUse;
  category: EnglishCategory;
  level: number; // 1 (Word) -> 5 (Complex Sentence)
  
  // Content
  text: string;
  image: string;
  translation: string;
  
  // Metadata for the "Neuro" aspect
  motorPattern?: string; // e.g., 'left-hand-heavy', 'alternating'
}
