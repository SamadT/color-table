import { useParams, Link, data } from "react-router-dom";
import { useState } from "react";
import '../assets/styles/hp.scss';
import tab_dict from '../assets/conf/table_conf.json';
import Navbar from "./navbar";

function PL_list_footer(){
    return (
        <ul className="footer-list">
            <li className="footer-comp" key="1">Adresa</li>
            <li className="footer-comp" key="2">Email</li>
            <li className="footer-comp" key="3">Telefon</li>
        </ul>
    );
}

function EN_list_footer(){
    return (
        <ul className="footer-list">
            <li className="footer-comp" key="1">Adresa</li>
            <li className="footer-comp" key="2">Email</li>
            <li className="footer-comp" key="3">Telefon</li>
        </ul>
    );
}

function auto_raiser(code){
    if(code === "#FF0000"){
        return "translateY(200%)";
    }else if(code === "#FFD700"){
        return "translateY(150%)";
    }else
        return null;
}

function Table_gen(props){
    const [color, setColor] = useState(null);

    function handleColorChange(e){
        setColor(e.target.value);
    }

    let tag_list = [];
    const dict_with_items = props.tabls.data

    if(props.lang === "pl"){
        const lang_dict = dict_with_items.pl;
        for(let i = 1; i <= Object.keys(lang_dict).length; i++){
            tag_list.push(lang_dict[`tr${i}`]);
        }
    }else{
        const lang_dict = dict_with_items.en;
        for(let i = 1; i <= Object.keys(lang_dict).length; i++){
            tag_list.push(lang_dict[`tr${i}`]);
        }
    }
    return (
        <table>
            <tbody>
                {tag_list.map((elem, index) => (
                    <tr key={index}>
                        {elem.map((e, index) => (
                                <td rowSpan={e.row} colSpan={e.col} key={index} style={{
                                    
                                    background: e.code,
                                }}>
                                    <a href={e.link} target="_blank" style={{
                                        color: e.code === "#0000FF" || e.code === "#800080" || e.code === "#800000" || e.code === "#008080" || e.code === "#808080" || e.code === "#008000" ? "beige" : "black",
                                        width: "100%",
                                        height: "100%",
                                    }}>
                                    <div className="flex_middler">
                                        <h5 style={{
                                            textShadow: e.code === "#0000FF" || e.code === "#800080" || e.code === "#800000" || e.code === "#008080" || e.code === "#808080" || e.code === "#008000" ? "0.2em 0.2em 0.3em beige" : "0.2em 0.2em 0.3em black",
                                            transform: auto_raiser(e.code),
                                        }}>{e.title}</h5>
                                        <p style={{
                                            textShadow: e.code === "#0000FF" || e.code === "#800080" || e.code === "#800000" || e.code === "#008080" || e.code === "#808080" || e.code === "#008000" ? "0.2em 0.2em 0.3em beige" : "0.2em 0.2em 0.3em black",
                                        }}>{e.code}</p>
                                        <p style={{
                                            textShadow: e.code === "#0000FF" || e.code === "#800080" || e.code === "#800000" || e.code === "#008080" || e.code === "#808080" || e.code === "#008000" ? "0.2em 0.2em 0.3em beige" : "0.2em 0.2em 0.3em black",
                                        }}>{e.link}</p>
                                    </div>
                                    </a>
                                </td>
                        ))}
                    </tr>
                ))}
                <tr>
                    <td rowSpan="2" colSpan="3">
                        <div className="flex_middler" style={{
                            height: "100%",
                        }}>
                        {props.lang === 'pl' ? (
                            <h5 style={{
                                transform: "translateY(10px)",
                            }}>Filmik</h5>
                        ) : (
                            <h5 style={{
                                transform: "translateY(10px)",
                            }}>Film</h5>
                        )}
                        <video width="80%" height="80%" style={{
                            backgroundSize: "cover",
                        }} controls>
                            <source src="/media/videos/2421545-uhd_3840_2160_30fps.mp4" />
                        </video>
                        </div>
                    </td>
                    <td style={{
                        background: "navy",
                        color: "beige",
                        textShadow: "0.2em 0.2em 0.3em beige",
                    }}>
                        <div className="flex_middler">
                            <h5 style={{
                                textShadow: "0.2em 0.2em 0.3em beige",
                            }}>Navy</h5>
                            <p>#000080</p>
                            <p>https://en.wikipedia.org/wiki/Navy_blue</p>
                        </div>
                    </td>
                    <td rowSpan="2" colSpan="2">
                        <div className="flex_middler" style={{
                            height: "100%",
                        }}>
                            <h5 style={{
                                fontSize: "1.3em",
                                transform: "translateY(10px)",
                            }}>Pink Floyd - <q>Any color you like</q></h5>
                            <img alt="image" src="/media/images/audio_1.jpg" width="200px" height="200px" />
                            <audio controls>
                                <source src="/media/audios/pink-floyd-any-colour-you-like.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{
                        background: color,
                        textShadow: "0.2em 0.2em 0.3em black",
                    }}>
                        <div className="flex_middler">
                            <h5 style={{
                                fontSize: "20px",
                            }}>Choose your color</h5>
                            <p>{color}</p>
                            <p><input onChange={handleColorChange} type="color"/></p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

function Main_render(props){
    if(props.lang === 'pl' || props.lang === 'en'){
        return (
            <>
                <section className="table-header">
                <img alt="pointer" src={"/media/images/poiner.gif"} className="header_img reverse_image"/>
                {props.lang === 'pl' ? (
                    <h1 style={{
                        fontSize: "6em",
                    }}>Tabela z Kolorami</h1>
                ) : (
                    <h1>Color Table</h1>
                )}
                <img alt="pointer" src={"/media/images/poiner.gif"} className="header_img" />
                </section>
                <section>
                    <Table_gen lang={ props.lang } tabls={props.tabls} />
                </section>
                <section className="wrapper">
                    <div className="marq_list">
                        {props.lang === 'pl' ? (
                            <div className="marquee-text-track fadeout_horizontal">
                            <p>Autor: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p>Autor: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p>Autor: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p aria-hidden="true">Autor: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p aria-hidden="true">Autor: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            </div>
                        ) : (
                            <div className="marquee-text-track fadeout_horizontal">
                            <p>Author: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p>Author: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p>Author: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p>Author: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p aria-hidden="true">Author: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p aria-hidden="true">Author: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            <p aria-hidden="true">Author: 2025 &copy; Oleksandr Tishchenko 3-E</p>
                            </div>
                        )}
                    </div>
                </section>
                <footer>
                    {props.lang === 'pl' ? (
                        <PL_list_footer />
                    ) : (
                        <EN_list_footer />
                    )}
                    <img alt="Something" src="/media/images/something.jpg" className="footer-image" />
                </footer>
            </>
        );
    }else{
        window.location.replace("/404")
    }
}

function Main_page(){

    const { language } = useParams();

    // console.log(tab_dict);

    return (
        <>
            <Navbar />
            <Main_render lang={ language } tabls={ tab_dict } />
        </>
    );
}

export default Main_page;