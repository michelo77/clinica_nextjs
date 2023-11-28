export default function Navbar() {
    return (
        <nav className="bg-teal-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-lg font-bold">Clinica San Lucas</a>
                <div className="flex space-x-4">
                    <a href="#" className="text-white">Inicio</a>
                    <a href="profesionales" className="text-white">Profesionales</a>
                    <a href="#" className="text-white">Historia</a>
                    <a href="#" className="text-white">Politicas 2023</a>
                    <a href="#" className="text-white">Contcto</a>
                    <a href="#" className="text-white">Pedir Hora</a>
                </div>
            </div>
        </nav>

    )
}