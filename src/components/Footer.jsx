export default function Footer() {
    return (
        <div className="flex items-end w-full min-h-screen">

            <footer className="bg-teal-400 text-white py-4 flex justify-between border-2 border-rose-600 ">
                <div className="container">
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="">
                            <h1>CLINICA SAN LUCAS</h1>
                        </div>
                        <div>
                            <h1>DIRECCION</h1>
                        </div>
                        <div>
                            <h1>CONTACTOS</h1>
                        </div>
                        <div>
                            <h1>REDES SOCIALES</h1>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}