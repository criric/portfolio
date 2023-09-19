export function Header() {
  return (
    <header className="flex justify-center items-center h-14 text-gray-700">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl">ReactJS</h1>
        <nav>
          <ul className="flex gap-16">
            <li>Home</li>
            <li>Sobre</li>
            <li>Stacks</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}