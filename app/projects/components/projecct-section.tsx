import siteData from "@/blog.config";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ExternalLink, Github} from "lucide-react";
import {Button} from "@/components/ui/button";

const ProjectSection = () => {
    const {projects, getStatus} = siteData
    return (
        <>
            <Separator className={'my-8'}/>
            <div className={'grid grid-cols-1 gap-4 not-prose'}>
                {projects.map((project: any, index: number): any => {
                    const {variant, text}: any = getStatus(project.status)
                    return (
                        <Card key={index}>
                            <CardHeader>
                                <div className={'flex items-center justify-between'}>
                                    <CardTitle className={'mr-4'}>
                                        {project.name}
                                    </CardTitle>
                                    <div>
                                        <Badge variant={variant}>
                                            {text}
                                        </Badge>
                                    </div>
                                </div>
                                <CardDescription>{project.description}</CardDescription>
                                <div className={'flex justify-end space-x-1'}>
                                    <Link href={project.link}>
                                        <Button variant={'ghost'} size={'icon'}>
                                            <Github size={20}/>
                                        </Button>
                                    </Link>
                                    <Link href={project.link}>
                                        <Button variant={'ghost'} size={'icon'}>
                                            <ExternalLink size={20}/>
                                        </Button>
                                    </Link>
                                </div>
                            </CardHeader>
                        </Card>
                    )
                })}
            </div>
        </>
    );
}

export default ProjectSection