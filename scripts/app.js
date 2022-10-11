// const movies = [{
//   title: 'Twin Peaks',
//   image: 'images/Twin_Peaks1.jpg',
//   description: 'Twin Peaks is an American mystery serial drama television series created by Mark Frost and David Lynch. It premiered on ABC on April 8, 1990, and originally ran for two seasons until its cancellation in 1991. The show returned in 2017 for a third season on Showtime.',
//   date: '1990-04-01T00:00:00',
//   director: 'David Lynch',
//   duration: '1 год 32 хв',
// }, {
//   title: 'Malena',
//   image: 'images/malena1.jpg',
//   description: 'Malèna is a comedy-drama film written and directed by Giuseppe Tornatore from a story by Luciano Vincenzoni.[3] It stars Monica Bellucci and Giuseppe Sulfaro. The film won the Grand Prix at the 2001 Cabourg Film Festival.[4] At the 73rd Academy Awards, the film was nominated for Best Cinematography and Best Original Score',
//   date: '2000-04-01T00:00:00',
//   director: 'Luciano Vincenzoni',
//   duration: '1 год 48 хв',
// },{
//   title: 'Godfather',
//   image: 'images/Godfather.jpg',
//   description: 'The Godfather is a 1972 American crime film[2] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzos best-selling 1969 novel of the same name. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss',
//   date: '1972-04-01T00:00:00',
//   director: 'Francis Ford Coppola',
//   duration: '2 год 55 хв',
// },{
//   title: "Breakfast at Tiffany's",
//   image: 'images/tiffany1.jpg',
//   description: 'Breakfast at Tiffanys is a American romantic comedy film directed by Blake Edwards, written by George Axelrod, adapted from Truman Capotes 1958 novella of the same name, and starring Audrey Hepburn as Holly Golightly, a naïve, eccentric café society girl who falls in love with a struggling writer. It was theatrically released by Paramount Pictures on October 5, 1961, to critical and commercial success.',
//   date: '1961-04-01T00:00:00',
//   director: 'Blake Edwards',
//   duration: '1 год 54 хв',
// }];

import { appendContent } from './helpers.js';
import { createContentTemplate } from './card.js';
import { createSorting } from './sorting.js';
import { getMovies } from './service.js';

function init () {
  appendContent('sort', createSorting());
  
  getMovies()
.then((data) => {
 const fragment = document.createDocumentFragment();

 data.forEach((movie) => {
   fragment.appendChild(createContentTemplate(movie));
 });

 appendContent('content', fragment);
 
});
}

init();
