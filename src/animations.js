export const topDown = () => {
  const parent = document.getElementById('main');
  setTimeout(() => {
    parent.classList.replace('opacity-0', 'opacity-1');
    parent.classList.remove('-translate-y-full');
  }, 150);
};

export const downTop = () => {
  const parent = document.getElementById('main');
  setTimeout(() => {
    parent.classList.replace('opacity-1', 'opacity-0');
    parent.classList.add('-translate-y-full');
  }, 10);
};

export const homepageAnims = () => {
  const title1 = document.getElementById('title1');
  const title2 = document.getElementById('title2');
  const title3 = document.getElementById('title3');
  setTimeout(() => {
    title1.classList.remove('translate-x-full');
  }, 1000);
  setTimeout(() => {
    title2.classList.remove('translate-x-full');
  }, 3000);
  setTimeout(() => {
    title3.classList.replace('opacity-0', 'opacity-1');
    title3.classList.replace('invisible', 'visible');
  }, 3900);
};
