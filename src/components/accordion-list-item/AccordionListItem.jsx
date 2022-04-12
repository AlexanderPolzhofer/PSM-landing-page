import DATA from './../../db/db.json';

const AccordionListItem = () => {

    const { faq } = DATA;

    return (
        <>
            {faq.map(item =>

                <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            {item.question}
                        </button></h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                    >
                        <div className="accordion-body">
                            {item.answer}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default AccordionListItem;