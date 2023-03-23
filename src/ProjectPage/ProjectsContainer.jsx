import pimg from '../Images/nightsky.jpg';

function ProjectsContainer(){
    return(
        <div className="scroll-container">
        <div
            id="card-track"
            className="container"
            data-mouse-down-at={0}
            data-prev-percentage={0}
        >
            <div className="scroll-content">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10">
                {/*Project cards go here, in the middle main column*/}
                <div className="card mb-4">
                    <img
                    src={pimg}
                    className="card-img-top"
                    alt="Project Image"
                    draggable="false"
                    />
                    <div className="card-body">
                    <h2 className="card-title">Project 1</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text">
                        Sample text explaining the purpose of this project
                        </p>
                        <span className="text-right">
                        <a href="#" className="btn btn-primary">
                            View Github
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <img
                    src={pimg}
                    className="card-img-top"
                    alt="Project Image"
                    draggable="false"
                    />
                    <div className="card-body">
                    <h2 className="card-title">Project 2</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text">
                        Sample text explaining the purpose of this project
                        </p>
                        <span className="text-right">
                        <a href="#" className="btn btn-primary">
                            View Github
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <img
                    src={pimg}
                    className="card-img-top"
                    alt="Project Image"
                    draggable="false"
                    />
                    <div className="card-body">
                    <h2 className="card-title">Project 3</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text">
                        Sample text explaining the purpose of this project
                        </p>
                        <span className="text-right">
                        <a href="#" className="btn btn-primary">
                            View Github
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-1" />
            </div>
            </div>
        </div>
        </div>
    );
}

export default ProjectsContainer;