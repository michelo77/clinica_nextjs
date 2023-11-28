export default function ProfessionalCard({ profesional }) {
    return (
        <div className="mt-4 border mx-auto right-0 mt-2 w-72 text-center">
            <p className="my-2">{profesional.Nombre} {profesional.Apellido}</p>
            <p className="my-2">{profesional.Rut}</p>
            <p className="my-2">{profesional.Correo}</p>
            <p className="my-2">{profesional.Telefono}</p>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                <a href="pedirHora">Solicitar hora</a>
            </button>
        </div>
    )
}