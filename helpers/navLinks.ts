/* eslint-disable prettier/prettier */
type NavLink = {
   title: string
   path: string
}

export const navLinks: NavLink[] = [
   { title: `Browse`, path: `/search` },
   { title: `Histroy`, path: `/history` },
   { title: `Favorites`, path: `/favorites` },
]
