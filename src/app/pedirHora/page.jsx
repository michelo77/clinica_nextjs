import Navbar from "@/components/Navbar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function pedirHora(){
    return (
        <div>
            <Navbar/>
            <Calendar/>
        </div>
        
    )
}