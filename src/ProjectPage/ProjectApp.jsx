//Combine all Projects Page components in this one
import Header from "./Header";
import ProjectsContainer from "./ProjectsContainer";

function ProjectApp(){
    return(
        <div>
            <Header/>
            <ProjectsContainer/>
        </div>
    );
}

export default ProjectApp;