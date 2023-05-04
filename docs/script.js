const btn = document.querySelector('#menu-btn');
const phoneMenu = document.querySelector('#menu');

btn.addEventListener('click', () => {
  // use toggle so that if it's there, it wil remove, if not, it will add
  btn.classList.toggle('open');
  phoneMenu.classList.toggle('hidden');
  // hidden is already added to the phoneMenu by default
  // clicking on it just removes it for the phoneMenu to show
  // to prevent display tautology as hidden is there by default, we removed .flex there
  // we can now add it the moment .hidden is taken off
  // if not, the phoneNav will appear in a flex-row
  phoneMenu.classList.toggle('flex');
  // note that hidden was there and flex was not so toggle will always result in a 1 0/0 1
});
