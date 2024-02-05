import siteData from "@/blog.config";
import Title from "@/components/title";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";

const Projects = () => {
    const {project: {title, description, projects, getStatus}} = siteData;

    return (
        <>
            <Title title={title} description={description}/>
            <div className={'grid grid-cols-3 gap-4 not-prose'}>
                {projects.map((project: any, index: number): any => {
                    const {variant, text}: any = getStatus(project.status)
                    return (
                        <Card key={index}>
                            <CardHeader>
                                <div  className={'flex items-center justify-between'}>
                                    <CardTitle className={'mr-4'}>
                                        {project.name}
                                    </CardTitle>
                                    <div>
                                        <Badge variant={variant}>
                                            {text}
                                        </Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {project.description}
                            </CardContent>
                            <CardFooter className={'flex justify-end'}>
                                <Link href={project.link}>
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