import {Separator} from "@/components/ui/separator";

const Title = ({title, description}: any) => {
    return (
        <div className={'pt-12 pb-4'}>
            <h1>{title}</h1>
            {description && <p className={'text-zinc-600'}>{description}</p>}
            <Separator/>
        </div>
    );
}


export default Title