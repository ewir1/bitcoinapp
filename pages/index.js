import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2 className="my-4">Precio del Bitcoin</h2>

                <Precio
                    precio={props.precioBitcoin}
                />
            </div>

            <div className="col-md-8">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <Noticias
                    noticias={props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Proximos eventos Bitcoin</h2>
                <Eventos
                    eventos={props.eventos}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const precio = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-28&sortBy=publishedAt&apiKey=73b747688861479f97530387c6a578d1&language=es');
    const eventos = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=64P2RTEHJSFLC7LRQEFD');


    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();

    return {
        precioBitcoin: resPrecio.DISPLAY.BTC.USD,
        noticias: resNoticias.articles,
        eventos: resEventos.events
    }
}

export default Index;