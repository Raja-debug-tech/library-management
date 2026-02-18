import { useParams } from "react-router-dom";

const StudentWelcome=()=>{
    const {name}=useParams();
    return(
        <>
        <img src="" alt="" /><span>New College</span>
        <div>
            Welcome mr. {name}
        </div>
        </>
    );
}
export default StudentWelcome;