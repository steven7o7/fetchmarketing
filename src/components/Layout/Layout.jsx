import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
