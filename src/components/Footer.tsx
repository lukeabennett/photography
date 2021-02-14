export const Footer = ({ siteName }: {siteName: string}) => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer has-background-white">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <p className="is-size-3 page-title">
                            {siteName}
                        </p>
                        <p className="heading">Amateur Photographer</p>
                    </div>
                </div>

                <hr />

                <p className="is-size-7 has-text-weight-light">Copyright © {year} Luke Bennett</p>
            </div>
        </footer>
    );
};
