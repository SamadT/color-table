import '../assets/styles/info.scss';
import Navbar from "./navbar";

function Info_page(){
    return (
        <>
            <Navbar />
            <h1 className='interest-text'>Ciekawostka</h1>
            <p className='extra-info'>Proszę wybrać ciekawy na twój pogląd kolor:</p>
            <div className='grid-sector'>
                <div className="flip-box">
                    <div className='flip-box-inner'>
                        <div className='red-container flip-box-front'>
                            <p>Red</p>
                        </div>
                        <div className='flip-box-back'>
                            <p>Niegdyś była uważana za jedną z barw podstawowych w metodzie subtraktywnej i stosowana w poligrafii jako jedna z podstawowych barw farb drukowych, obecnie w tej metodzie jest barwą czystą składającą się z żółtego i magenty.</p>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className='flip-box-inner'>
                        <div className='yellow-container flip-box-front'>
                            <p>Yellow</p>
                        </div>
                        <div className='flip-box-back'>
                            <p>Światło mieszane powstające w wyniku mieszania się świateł pochodzącego z dwóch różnokolorowych źródeł, na przykład światło czerwone i zielone, jest także postrzegane przez ludzkie oko jako kolor żółty.</p>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className='flip-box-inner'>
                        <div className='blue-container flip-box-front'>
                            <p>Blue</p>
                        </div>
                        <div className='flip-box-back'>
                            <p>Jedna z addytywnych barw podstawowych, na kole barw dopełnia barwę żółtą. Zakres światła niebieskiego ma długość fali od ok. 420 do ok. 490 nm. Barwa niebieska ma także swoją ciemniejszą odmianę.</p>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className='flip-box-inner'>
                        <div className='green-container flip-box-front'>
                    <p>Green</p>
                    </div>
                    <div className='flip-box-back'>
                            <p>W starożytnym Egipcie używano zielonego barwnika do malowania brwi. Zielony kolor był pierwszym uzyskanym syntetycznie, wytwarzanym przez człowieka – produkowali go starożytni Grecy.</p>
                    </div>
                </div>
                </div>
                <div className="flip-box">
                    <div className='flip-box-inner'>
                        <div className='gray-container flip-box-front'>
                            <p>Grey</p>
                        </div>
                        <div className='flip-box-back'>
                            <p>Szarość symbolizuje monotonię, pospolitość w przeciwieństwie do barwności, koloru, które kojarzone są z barwami czystymi. Dlatego potocznie szarość oznacza brak koloru (niekolorowość).</p>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className='flip-box-inner'>
                        <div className='purple-container flip-box-front'>
                            <p>Purple</p>
                        </div>
                        <div className='flip-box-back'>
                            <p>W zakresie od intensywnie czerwonego do fioletu, także w głębokich odcieniach zbliżonych do barwy śliwki czy do koloru granatowego. Nazwa barwy wzięła się od purpury, czyli barwnika ciemnoczerwonego, używanego do barwienia tkanin.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info_page;