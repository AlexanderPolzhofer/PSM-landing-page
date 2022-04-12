import styles from './ContentInfo.module.css';

const ContentInfo = ({ info }) => {

    return (
        <section className={styles.contentInfoContainer}>
            {info.map(info => {
                return (<div key={info.appDescription}>
                    <h2>
                        {info.appDescription}
                    </h2>
                    <span>
                        {info.appDescriptionMain}
                    </span>
                </div>)
            })}
        </section>)
}

export default ContentInfo;