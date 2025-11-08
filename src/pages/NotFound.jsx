import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(()=>{ 
    document.body.classList.add('loaded'); 
    document.title = 'Page not found – FetchMarketing'; 
  },[]);
  
  return (
    <section className="section" style={{ minHeight:'100vh', display:'grid', placeContent:'center', textAlign:'center', color:'#fff' }}>
      <div>
        <h1 style={{ fontSize:'88px', marginBottom:'16px' }}>404</h1>
        <p style={{ fontSize:'24px', marginBottom:'24px' }}>Sorry, the page you're looking for doesn't exist.</p>
        <Link className="btn primary" to="/">Back to home</Link>
      </div>
    </section>
  );
}
