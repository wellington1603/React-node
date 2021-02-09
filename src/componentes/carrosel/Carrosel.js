import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.prsguitars.com/images/electrics/ce_24_semi_hollow_2019_hero_large.jpg',
    altText: 'Guitarra',
    caption: 'PSR',
    header: 'Em breve',
    key: '1'
  },
  {
    src: 'https://www.prsguitars.com/images/electrics/silver_sky_lunar_ice_2021_hero_large.jpg',
    altText: 'Slide 2',
    caption: 'PSR',
    header: 'Em breve',
    key: '2'
  },
  {
    src: 'https://www.prsguitars.com/images/electrics/ce24_2017_hero_large_a.jpg',
    altText: 'Slide 3',
    caption: 'PSR',
    header: 'Em breve',
    key: '3'
  }
];

// const Carrosel = () => <UncontrolledCarousel items={items} />;
function Carrosel(){
    return(
        <div>
            <UncontrolledCarousel items={items}/>
        </div>
    
    )
}

export default Carrosel;