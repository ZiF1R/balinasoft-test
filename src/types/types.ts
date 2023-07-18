type MenuItem = {
  id: number,
  name: string,
  link: string,
};
type Menu = Array<MenuItem>;

interface Film {
  title: string,
  description: string,
  restriction: number,
  image: string,
  rate: number,
}

interface SimilarFilm extends Film {
  id: number,
  type: string,
  link: string,
}
type SimilarFilms = Array<SimilarFilm>;

type FilmRate = {
  source: string,
  rate: number,
  ratesCount: number,
}
interface MainFilm extends Film {
  preview: string,
  country: string,
  director: string,
  shortInfo: string,
  ticketPrice: number,
  actors: Array<string>
  otherRates: Array<FilmRate>,
  fragmentsLink: Array<string>,
  tags: Array<string>,
}

export {
  Menu,
  MenuItem,
  SimilarFilm,
  SimilarFilms,
  FilmRate,
  MainFilm,
}
