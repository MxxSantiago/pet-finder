import HomeTemplate from './components/templates/HomeTemplate.component';
import useFetch from './hooks/useFetch';

function App() {
    const [data, currentPage, setCurrentPage] = useFetch();

    return (
        <div>
            <HomeTemplate
                data={data}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
