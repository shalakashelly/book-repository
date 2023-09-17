export type TBook = {
  id: number,
  title: string,
  author: string,
  publisher?: string,
  publication_date?: string,
  isbn?: string,
  description: string,
  cover_image: string,
  categories: Category[],
  tags: Tags[]
}

export type Category =
  "Adventure" |
  "Classic" |
  "Fantasy" |
  "Fiction" |
  "Humor" |
  "Magical Realism" |
  "Modernist" |
  "Poetry" |
  "Science Fiction" |
  "Spiritual";

export type Tags = 
  "Adventure" |
  "American literature" |
  "British literature" |
  "Classic" |
  "Coming of age" |
  "Family saga" |
  "Gothic" |
  "Irish literature" |
  "Latin American literature" |
  "Magical Realism" |
  "Philosophical" |
  "Psychological" |
  "Quest" |
  "Romance" |
  "Russian literature" |
  "Science Fiction" |
  "Social commentary" |
  "Spiritual" |
  "Stream of consciousness" |
  "Totalitarianism";
