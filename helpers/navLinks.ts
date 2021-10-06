/* eslint-disable prettier/prettier */
type NavLink = {
   title: string
   path: string
}

export const navLinks: NavLink[] = [
   { title: `Home`, path: '/' },
   { title: `Browse`, path: `/search` },
   { title: `Histroy`, path: `/profile` },
   { title: `Favourites`, path: `/pricing` },
]
