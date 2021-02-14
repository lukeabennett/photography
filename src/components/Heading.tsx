export const Heading = ({ size, title, subtitle}: {size?: string, title: string, subtitle: string}) => (
    <section className={`hero is-dark ${size ? size : ""}`}>
        <div className="hero-body">
            <div className="container">
                <div className="dot-grid-small" />
                <h2 className="heading">
                    {subtitle}
                </h2>
                <h1 className="title page-title is-size-1">
                    {title}
                </h1>
            </div>
        </div>
    </section>
);
