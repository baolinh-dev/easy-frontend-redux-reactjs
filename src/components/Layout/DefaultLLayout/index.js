import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
