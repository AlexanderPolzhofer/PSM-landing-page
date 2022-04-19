import DATA from './../../db/db.json';

const AccordionListItem = () => {

    const { faq } = DATA;
    var heading = '';

    const checkId = (id) => {
        if (id === 1) {
            heading = 'headingOne';
            return "collapseOne";
        } else if (id === 2) {
            heading = 'headingTwo';
            return "collapseTwo";
        } else if (id === 3) {
            heading = 'headingThree';
            return "collapseThree";
        } else if (id === 4) {
            heading = 'headingFour';
            return "collapseFour";
        } else if (id === 5) {
            heading = 'headingFive';
            return "collapseFive"
        }
    }

    return (
        <>
            {faq.map((item) => {
                const { id } = item;
                checkId(id);

                return (< div className="accordion-item" key={item.id} >
                    <h2 className="accordion-header" id={heading}>
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${checkId(id)}`}
                            aria-expanded="true"
                            aria-controls={checkId(id)}>
                            {item.question}
                        </button></h2>
                    <div
                        id={checkId(id)}
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body">
                            {item.answer}
                        </div>
                    </div>
                </div>)
            }
            )}
        </>
    )
};

export default AccordionListItem;