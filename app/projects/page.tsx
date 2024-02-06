import siteData from "@/blog.config";
import Title from "@/components/title";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";
import {cn} from "@/lib/utils";

const Projects = () => {
    const {project: {title, description, projects, getStatus, view, target}} = siteData;
    const isGrid = view === 'grid'

    return (
        <>
            <Title title={title} description={description}/>
            <div className={cn('grid gap-4', isGrid ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1')}>
                {projects.map((project: any, index: number): any => {
                    const {variant, text}: any = getStatus(project.status)
                    return (
                        <Card key={index} className={cn('not-prose', !isGrid && 'flex flex-row justify-between p-6')}>
                            <CardHeader className={cn(!isGrid && 'p-0')}>
                                <div className={cn('flex items-center mb-2', isGrid && 'justify-between')}>
                                    <CardTitle className={'mr-4'}>
                                        {project.name}
                                    </CardTitle>
                                    <Badge variant={variant}>
                                        {text}
                                    </Badge>
                                </div>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className={cn('flex items-center justify-end space-x-1', !isGrid && 'p-0')}>
                                {project.github && <Link href={project.github} target={target}>
                                  <Button variant={'ghost'} size={'icon'}>
                                    <Github size={20}/>
                                  </Button>
                                </Link>}
                                <Link href={project.link} target={target}>
                                    <Button variant={'ghost'} size={'icon'}>
                                        <ExternalLink size={20}/>
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}
export default Projects;