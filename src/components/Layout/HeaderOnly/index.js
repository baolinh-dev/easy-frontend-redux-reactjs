import Header from '../DefaultLLayout/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default HeaderOnly;
