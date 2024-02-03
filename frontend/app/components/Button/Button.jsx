import Link from 'next/link';
import React from 'react'

export default function Button({ children, href, type }) {
  if (href) {
    return(
        <Link href={href} className={`${type === 'primary' ? 'bg-red-500' : 'bg-blue-500'}`}>{children}</Link>
    );
  }
  return <button className={`${type === 'primary' ? 'bg-red-500' : 'bg-blue-500'}`}>{children}</button>
}
