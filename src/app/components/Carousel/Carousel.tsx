import React from 'react';
import styles from './Carousel.module.scss';
import { IFilmItem } from '../../interfaces/topFilms.interface';

interface CarouselItemProps {
    films: IFilmItem[]
}

const Carousel = ({films} : CarouselItemProps) => {
  console.log(films)
  return (
    <div>{films[0].nameRu}</div>
  );
};

export default Carousel;