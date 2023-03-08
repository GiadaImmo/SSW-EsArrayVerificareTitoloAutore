/*
  Partite dall’esercizio precedente introducendo un array contenente oggetti con autore e titolo e ricercando i titoli che corrispondono ad una sequenza di caratteri. Se corrisponde solo un libro visualizzate autore e titolo (ad es. nella console), altrimenti il numero di libri corrispondenti.
  Come sopra, non utilizzate input box.
*/

import './style.css';

const elencoLibri = [
  {
    autore: 'Dante Alighieri',
    titolo: 'La Divina Commedia',
  },
  {
    autore: 'Alessandro Manzoni',
    titolo: 'I Promessi Sposi',
  },
  {
    autore: 'Ugo Foscolo',
    titolo: 'I Sepolcri',
  },
  {
    autore: 'Italo Svevo',
    titolo: 'Senilità',
  },
];

let libroInserito = 'Da'; // Stringa inserita dall'utente per cercare un libro

const libriTrovati = elencoLibri.filter(trovaLibri); // restituisce un nuovo array contenente gli elementi che rispettano la condizione specificata nella funzione

function trovaLibri(libro) {
  return (libro['autore'] + ' ' + libro['titolo'])
    .toLowerCase()
    .includes(libroInserito.toLowerCase());
}

// METODO ALTERNATIVO CON FOREACH
// const libriTrovati = [];
// elencoLibri.forEach(trovaLibri);

// function trovaLibri(libro) {
//   if (
//     (libro['autore'] + ' ' + libro['titolo'])
//       .toLowerCase()
//       .includes(libroInserito.toLowerCase())
//   ) {
//     libriTrovati.push(libro);
//   }
// }

if (libriTrovati.length == 1) {
  console.log(
    libriTrovati[0]['autore'] + ' "' + libriTrovati[0]['titolo'] + '" '
  );
} else {
  if (libriTrovati.length > 1) {
    console.log(libriTrovati.length);
  } else {
    console.log('Nessun libro trovato');
  }
}
