document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const sidebar = document.querySelector('.sidebar');
  const cards = gsap.utils.toArray('.card');
  const overlayToggle = document.querySelector('.overlay-toggle');

  const animateCardsIn = () => {
    gsap.to(overlayToggle, {
      right: '-500px',
      duration: 1,
      ease: 'power4.out',
    });

    gsap.to(
      cards,
      {
        right: '0%',
        stagger: 0.075,
        duration: 1,
        ease: 'power4.out',
      },
      '<'
    );

    gsap.to(
      container,
      {
        filter: 'blur(15px)',
        duration: 1,
        immediateRender: false,
      },
      '<'
    );
  };

  const animateCardsOut = () => {
    gsap.to(overlayToggle, {
      right: '0px',
      duration: 1,
      ease: 'power4.out',
    });

    gsap.to(
      cards,
      {
        right: '-110%',
        stagger: 0.075,
        duration: 1,
        ease: 'power4.out',
      },
      '<'
    );

    gsap.to(
      container,
      {
        filter: 'blur(0px)',
        duration: 1,
        immediateRender: false,
      },
      '<'
    );
  };

  overlayToggle.addEventListener('click', () => {
    sidebar.style.pointerEvents = 'all';
    animateCardsIn();
  });

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      sidebar.style.pointerEvents = 'none';
      animateCardsOut();
    });
  });
});
