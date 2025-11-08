import { useEffect } from 'react';

export default function useScrollSpy(ids = []) {
  useEffect(() => {
    const links = ids.map(id => document.querySelector(`a[href="#${id}"]`)).filter(Boolean);
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

    const onScroll = () => {
      const y = window.scrollY + 120; // header offset
      let active = null;
      for (const sec of sections) {
        if (sec.offsetTop <= y) active = sec.id;
      }
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${active}`));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
}
