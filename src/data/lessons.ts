export type Lesson = {
  id: number;
  text: string;
  image: string;
  translation?: string;
};

export const lessons: Lesson[] = [
  {
    id: 1,
    text: "the cat sleeps",
    image: "https://images.unsplash.com/photo-1694969173307-2cdd3b715bff?q=80&w=400&auto=format&fit=crop",
    translation: "o gato dorme",
  },
  {
    id: 2,
    text: "run fast now",
    image: "https://plus.unsplash.com/premium_photo-1723874435031-0f1a1fc4d2eb?q=80&w=400&auto=format&fit=crop",
    translation: "corra rápido agora",
  },
  {
    id: 3,
    text: "the child laughs",
    image: "https://plus.unsplash.com/premium_photo-1726754474184-45556803278f?q=80&w=400&auto=format&fit=crop",
    translation: "A criança ri"
  }
];
