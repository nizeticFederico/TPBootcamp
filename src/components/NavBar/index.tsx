import Link from "next/link";

/* interface Props {
    label: string,
    route: string
} */

const navItems = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Products',
        route: '/products'
    },
    {
        label: 'Carrito',
        route: '/cart'
    }
]

const NavBar = () => {
    


  return (
  <nav className="flex text-center justify-center bg-black text-white gap-10 text-xl">
      {navItems.map((item, index) => {
          return (
          <Link key={index} href={item.route}>
              {item.label}
          </Link>
              
        );
      })}
  </nav>
  )
}

export default NavBar