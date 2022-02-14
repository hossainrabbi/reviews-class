import Reviews from './components/Reviews';
import { Title } from './styles/Elements.style';
import GlobalStyle from './styles/Global.style';

function App() {
    return (
        <main>
            <GlobalStyle />
            <Title>Our Reviews</Title>
            <Reviews />
        </main>
    );
}

export default App;
