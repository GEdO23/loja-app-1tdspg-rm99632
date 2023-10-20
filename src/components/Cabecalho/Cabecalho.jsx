import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className="bg-slate-700 h-20 text-white">
          <nav>
            <ul>
              <li><Link href="/">↪ Home</Link></li>
              <li><Link href="/produtos/camisa">↪ Camisas</Link></li>
              <li><Link href="/produtos/tenis">↪ Tenis</Link></li>
            </ul>
          </nav>
    </header>
  )
}
