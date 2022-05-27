import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
    return (
        <div className="container">
            <div className="styleME" style={{margin: '0 auto', width:'40%'}}>
                <UserSearch />
            </div>
            <UserResults />
        </div>
    );
}

export default Home;
