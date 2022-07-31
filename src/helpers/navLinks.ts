/* eslint-disable prettier/prettier */
type NavLink = {
   title: string
   path: string
}

export const navLinks: NavLink[] = [
   { title: `Home`, path: '/' },
   { title: `Browse`, path: `/search` },
   { title: `History`, path: `/recents` },
   { title: `Favourites`, path: `/favourites` },
]
