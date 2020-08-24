import React from 'react';
import '../assets/styles/components/Search.scss';

const mainTitle = '¿Que quieres ver hoy?';
const mainInput = 'Buscar...';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{mainTitle}</h2>
    <input type='text' className='input' placeholder={mainInput} />
  </section>
);
export default Search;
