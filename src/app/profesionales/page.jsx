import axios from "axios";
import ProfessionalCard from "@/components/ProfessionalCard";
import Navbar from "@/components/Navbar";

async function loadProfesionales() {
  const {data} = await axios.get('http://localhost:3000/api/profesionales')
  return data
}

// export const dynamic = 'force-dynamic'

async function ProfesionalesPage() {
  const profesionales = await loadProfesionales();
  console.log(profesionales);

  return <div>
    <Navbar/>
    
    {profesionales.map(p => (
       <ProfessionalCard profesional={p} key={p.id}/>
    ))}
  </div>;
}

export default ProfesionalesPage;