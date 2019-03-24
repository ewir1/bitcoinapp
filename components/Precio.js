const Precio = (props) => {

    // console.log(props);

    const{PRICE,CHANGEPCT24HOUR,MARKET,TOTALVOLUME24H} = props.precio;
    

    return(
        <div className="card text-white bg-success mb-3">
            <div className="card-header">
                Precio del Bitcoin
            </div>
            <div className="card-body">
                <h4 className="card-title">Precio Actual: {PRICE}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Últimas 24 Horas: </span> {CHANGEPCT24HOUR}%
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Market: </span> {MARKET}
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Volumen Total 24 Horas: </span> {TOTALVOLUME24H}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Precio;