import Link from 'next/link'

export default function Nav() {
    return <nav className="nav">
        <ul>
            <li><Link href="/addStudents">Add Students</Link></li>
            <li><Link href="/listStudents">List Students</Link></li>
            </ul>
            </nav>
}