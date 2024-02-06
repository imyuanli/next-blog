import {Separator} from "@/components/ui/separator";

const Title = ({title, description}: any) => {
    return (
        <div className={'pb-6'}>
            <h1>{title}</h1>
            {description && <p className={'text-zinc-600'}>{description}</p>}
            <Separator/>
        </div>
    );
}


export default Title