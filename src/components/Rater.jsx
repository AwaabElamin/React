import '../css/Rater.css';
function Rater(){
    return(
    <ul className="rating">
        <li className="filled">{'\u2505'}</li>
        <li className="filled">{'\u2505'}</li>
        <li className="filled">{'\u2505'}</li>
        <li>{'\u2505'}</li>
        <li>{'\u2505'}</li>
    </ul>
    );
}
export default Rater;