console.log('funguju!');

// Vytvořte komponentu Clock, která bude na vstupu očekávat takovýto objekt:
// {
//   hours: 12,
//   minutes: 34,
// }

const clocks = [
  {
    hours: 12,
    minutes: 34,
  },
  {
    hours: 8,
    minutes: 5,
  },
  {
    hours: 12,
    minutes: 23,
  },
  {
    hours: 10,
    minutes: 12,
  },
  {
    hours: 22,
    minutes: 34,
  },
];

const Clock = (props) => {
  const { hours, minutes } = props;
  return `<div class="clock">
  <span class="clock__hours">${String(hours).padStart(
    2,
    '0',
  )}</span>:<span class="clock__minutes">${String(minutes).padStart(
    2,
    '0',
  )}</span>
  </div>`;
};

document.querySelector('#app').innerHTML = clocks
  .map((clock) => Clock(clock))
  .join('');

// Pomocí funkce Clock vložte do stránky pod sebe několik různých hodin s různými časy.
// Vyrobte pole hodin a zobrazte je pomocí cyklu na stránce.
// Zajistěte, aby hodiny vždy zobrazovaly čas dvouciferně, tedy aby například pro čas
// {
//   hours: 8,
//   minutes: 5,
// }
// zobrazily čas 08:05.
