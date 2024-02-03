import React from 'react';
import Link from 'next/link';
import MenuList from './MenuList';
import Container from '../Container/Container';

export default function Header() {
  return (
    <header className="">
        <Container>
            <nav className="">
                <menu className="flex gap-6 items-center">
                    {MenuList.map((menuItem) => (
                        <li key={menuItem.id} className="inline-flex">
                            {menuItem.isImage ? (
                                <Link href={menuItem.url} className='text-base text-gray-900'>
                                    <img src={menuItem.src} alt="" />
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
