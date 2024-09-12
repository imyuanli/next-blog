import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {pluginConfig} from "@/blog.config";

const ButtonDown = () => {
    const {buttondown: {username}} = pluginConfig.newsletter

    return (
        <form
            action={`https://buttondown.email/api/emails/embed-subscribe/${username}`}
            method="post"
            target="popupwindow"
            onSubmit={() => {
                window.open(`https://buttondown.com/${username}`, 'popupwindow')
            }}
        >
            <div className="flex w-full max-w-sm items-center flex-col md:flex-row">
                <Input
                    className={"min-w-72 mb-2 mr-0 md:mb-0 md:mr-2"}
                    type="email"
                    placeholder="Subscribe via email"
                    name=" email"
                />
                <Button className={" w-full md:w-fit"} type="submit" value=" Subscribe">Subscribe</Button>
            </div>
        </form>
    )
}

export default ButtonDown