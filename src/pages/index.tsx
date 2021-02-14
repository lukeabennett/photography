import { GetStaticProps } from 'next';
import { Heading } from '../components/Heading';
import Layout from '../components/Layout';
import fs from 'fs';

interface HomePageProps {
    photos: string[];
}

const IndexPage = (props: HomePageProps) => (
  	<Layout title="Gallery">
		<Heading title="Photo Gallery" subtitle="Landscape & Wildlife Photography" />
		
        <section className="section">
            <div className="container">
                <div className="columns is-multiline is-mobile">
                    {props.photos.map(photo => {
                        return (
                            <div className="column is-one-quarter-tablet is-half-mobile">
                                <div className="card-image">
                                    <figure className="image">
                                        <img src={`${photo}`} width="300" height="375" />
                                    </figure>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
  	</Layout>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const fileNames = fs.readdirSync('public/photos');
    const photos = fileNames.map(fileName => `/photos/${fileName}`);
	return { props: { photos }};
}

export default IndexPage;
