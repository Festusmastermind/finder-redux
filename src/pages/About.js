function About() {
    //using React.Fragment alternative. ...to render the jsx
    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-body shadow-lg">
                    <h1 className="mb-4 text-center mt-5">Github Finder</h1>
                    <h4 className="mb-4 text-2xl font-light">
                        A React app to search GitHub profiles and see profile
                        details. This project is part of the
                        <a href="https://github.com/bradtraversy/github-finder-app">
                            {" "}
                            <small>React Front To Back</small>
                        </a>{" "}
                        Check out my Feed Review App here
                        <small>
                            <a href="https://feedreview.netlify.app/">
                                {" "}
                                MasterMind
                            </a>
                        </small>
                        .
                    </h4>

                    <small className="text-lg text-gray-400">
                        Layout By:
                        <a
                            className="text-black"
                            href="https://twitter.com/hassibmoddasser"
                        >
                            mastermindJavascript
                        </a>
                        <p className="text-lg text-gray-400">
                            Version <span className="text-black">1.0.0</span>
                        </p>
                    </small>
                </div>
            </div>
        </div>
    );
}

export default About;
