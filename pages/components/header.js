import Link from 'next/link'

export default () =>  {
    return (
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>

            <li>
                <Link href='/login'>
                    <a>login</a>
                </Link>
            </li>
        </ul>
    )
}

