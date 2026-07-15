import tmdbPreview from "../assets/img/project-tmdb.png";
import taskTrackerPreview from "../assets/img/project-task-tracker.png";
import projectThree from "../assets/img/project-3.jpg";

export type ProjectItem = {
    title: string;
    description: string;
    image: string;
    url?: string;
};

const placeholderDescription =
    "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.";

export const projects: ReadonlyArray<ProjectItem> = [
    {
        title: "TMDB Movie Explorer",
        description:
            "I built a movie discovery app powered by the TMDB API. Users can search and filter movies, explore detailed information, save favorites, and switch between light and dark themes.",
        image: tmdbPreview,
        url: "https://github.com/yarek-dev/TMDB",
    },
    {
        title: "Task Tracker",
        description:
            "I built a task management app with authentication. Users can create, edit, filter, and reorder task lists, manage tasks with pagination, and switch between light and dark themes.",
        image: taskTrackerPreview,
        url: "https://github.com/yarek-dev/Task_tracker",
    },
    {title: "Project Name 3", description: placeholderDescription, image: projectThree},
];
