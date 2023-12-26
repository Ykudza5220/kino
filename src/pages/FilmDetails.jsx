import { useParams } from "react-router-dom";
import SingleitemTabs from "../components/SingleitemTabs/SingleitemTabs";


function FilmDetails () {
    const {filmId}= useParams();
    return (
        <>
    
        <SingleitemTabs/>

        </>
    );
}
export default FilmDetails;