const Card = ({ listItem }) => {

    const { title, descripition, image } = listItem;

    return (
        <div className='card border-light mb-3' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div className="card-body">

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2 className="card-title">{title}</h2>
                            <p className="card-text">{descripition}</p>
                        </div>
                    </div>
                </div>

            </div>
            <img src={process.env.PUBLIC_URL + image} alt='example-img' height='50%' width='50%' />
        </div>
    )
}

export default Card;