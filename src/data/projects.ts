import tmdbPreview from "../assets/img/project-tmdb.webp";
import tmdbDarkPreview from "../assets/img/project-tmdb-dark.webp";
import taskTrackerPreview from "../assets/img/project-task-tracker.webp";
import taskTrackerDarkPreview from "../assets/img/project-task-tracker-dark.webp";

export type ProjectItem = {
    title: string;
    description: string;
    image: string;
    darkImage: string;
    url?: string;
};

export const projects: ReadonlyArray<ProjectItem> = [
    {
        title: "TMDB Movie Explorer",
        description:
            "I built a movie discovery app powered by the TMDB API. Users can search and filter movies, explore detailed information, save favorites, and switch between light and dark themes.",
        image: tmdbPreview,
        darkImage: tmdbDarkPreview,
        url: "https://github.com/yarek-dev/TMDB",
    },
    {
        title: "Task Tracker",
        description:
            "I built a task management app with authentication. Users can create, edit, filter, and reorder task lists, manage tasks with pagination, and switch between light and dark themes.",
        image: taskTrackerPreview,
        darkImage: taskTrackerDarkPreview,
        url: "https://github.com/yarek-dev/Task_tracker",
    },
];
