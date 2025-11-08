import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import WorkDetail from './pages/WorkDetail';
import NotFound from './pages/NotFound';

export default function App({ ParticleCanvas }) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home ParticleCanvas={ParticleCanvas} />} />
        <Route path="work/:slug" element={<WorkDetail />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
