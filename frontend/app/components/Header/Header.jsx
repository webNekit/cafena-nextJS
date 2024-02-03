import React from 'react';
import Link from 'next/link';
import MenuList from './MenuList';
import Container from '../Container/Container';

export default function Header() {
  return (
    <header className="py-12 w-full ">
        <Container>
            <nav className="w-full">
                <menu className="flex items-center justify-between">
                    {MenuList.map((menuItem) => (
                        <li key={menuItem.id} className="inline-flex">
                            {menuItem.isImage ? (
                                <Link href={menuItem.url} className="text-base text-gray-900 px-32">
                                    <img src={menuItem.src} alt="" width={65} height={53}/>
                                </Link>
                            ) : (
                                <Link href={menuItem.url} className='text-base text-gray-900'>{menuItem.title}</Link>
                            )}
                        </li>
                    ))}
                </menu>
            </nav>
        </Container>
    </header>
  )
}
