export interface CharacterApiResponse {
  info: CharacterInfo;
  results: Character[];
}

export interface CharacterInfo {
  count: number;
  pages: number;
  next: string;
  previous: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episodes: string[];
  url: string;
  created: string;
}
