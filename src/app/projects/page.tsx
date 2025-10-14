import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function AllProjectsPage() {
  const pastProjects = DATA.projects.filter((project) => !project.active);

  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 space-y-12 md:px-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Past Projects
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Explore My Previous Work
          </h1>
          <p className="text-muted-foreground max-w-2xl md:text-xl">
            Here’s a list of projects I’ve worked on before. They may be complete, paused, or retired—but each one taught me something.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] w-full">
        {pastProjects.length > 0 ? (
          pastProjects.map((project, idx) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 2 + idx * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))
        ) : (
          <p className="text-muted-foreground text-center col-span-full">
            No past projects yet!
          </p>
        )}
      </div>
    </main>
  );
}
