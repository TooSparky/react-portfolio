import { projects } from '../data/projectData';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <section id="projects">
            <div className="">
                <div className="projects-text">
                    <h1 className="">
                        Apps I Built
                    </h1>
                    <p>
                        More Text
                    </p>
                </div>
                <div className="projects-display">
                    {projects.map((project) => (
                        <Link href={project.link}
                        key={project.image}
                        className="">
                            <div className="">
                                <img src={project.image} alt="project screenshot" className=""/>
                                <div className="">
                                    <h2 className="">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="">
                                        {project.title}
                                    </h1>
                                    <p className="">{project.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
