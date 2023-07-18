type MenuItem = {
  id: number,
  name: string,
  link: string,
};
type Menu = Array<MenuItem>;

type SimilarFilm = {
  id: number,
  title: string,
  description: string,
  rate: number,
  type: string,
  restriction: number,
  image: string,
  link: string,
};
type SimilarFilms = Array<SimilarFilm>;

export {
  Menu,
  MenuItem,
  SimilarFilm,
  SimilarFilms,
}
