import React from 'react'
import { Disclosure, Menu} from '@headlessui/react'
import Logo from '../assets/Logo.png'

const navigation = [
    { name: 'LOGIN', href: '/login' },
    { name: 'SIGN UP', href: '/signUp'},
    ]
    
    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

export const Navbar = () => {
    return (
        <Disclosure
        as="nav"
        className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-10">
            <div className="relative flex h-26 items-center justify-between">
                <div className="flex shrink-0 items-center">
                    {/* <a href="/Home" className='lg:text-2xl md:text-2xl text-xl text-[rgb(26,46,86)] font-bold'>LOGO</a> */}
                    <img
                        alt="ByteClass"
                        src={Logo}
                        className="lg:h-15 md:h-13 h-12 w-auto"
                        // onClick={() => {navigate}}
                    />
                </div>
                    

            <div className="absolute inset-y-0 right-0 flex items-center lg:pr-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                    <div className="flex lg:space-x-3 md:space-x-3 space-x-0">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                            item.current ? 'bg-gray-950/50 text-white' : 'text-[rgb(26,46,86)] font-semibold',
                            'rounded-md px-3 py-2 lg:text-xl md:text-xl text-xs hover:bg-[rgb(26,46,86)] hover:text-white',
                            )}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>        
                </Menu>
            </div>
            </div>
        </div>

        </Disclosure>
    )
}

