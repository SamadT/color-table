import Navbar from "./navbar";
import '../assets/styles/sources.scss';

const source_list = ["https://pl.wikipedia.org/wiki/Barwa_czerwona", "https://pl.wikipedia.org/wiki/Barwa_%C5%BC%C3%B3%C5%82ta", "https://pl.wikipedia.org/wiki/Barwa_niebieska", "https://pl.wikipedia.org/wiki/Barwa_zielona", "https://pl.wikipedia.org/wiki/Barwa_szara", "https://pl.wikipedia.org/wiki/Barwa_purpurowa"];

export default function Sources(){
    return (
        <>
            <Navbar />
            <ul className="source-list">
                {source_list.map((elem, index) => (
                    <li key={index}><a target="_blank" href={elem}>{elem}</a></li>
                ))}
            </ul>
        </>
    );
}