import spinner from '../assets/spinner.gif'

function Spinner() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <img
                width={180}
                className="my-auto"
                src={spinner}
                alt="Loading..."
            />
        </div>
    );
}

export default Spinner;