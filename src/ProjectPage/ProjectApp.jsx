//Combine all Projects Page components in this one
import Header from "./Header";
import ProjectsContainer from "./ProjectsContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scripts,styles/projects.css';
import '../scripts,styles/index.css';

function ProjectApp(){
    return(
        <div>
            <Header/>
            <ProjectsContainer/>
        </div>
    );
}

export default ProjectApp;