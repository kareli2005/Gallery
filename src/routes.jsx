import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

const routes = {
  home: {
    path: '/',
    page: <Home />,
  },
  gallery: {
    path: '/gallery',
    page: <Gallery />,
  },
  profile: {
    path: '/profile',
    page: <Profile />,
  },
}

export default routes
