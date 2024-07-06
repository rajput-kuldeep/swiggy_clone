import usePartnerOnboarding from "@/utils/usePartnerOnboarding";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface TODO {
    title: string;
    description: string;
    id: number
}


const HelpPartOne = () => {


    const data = usePartnerOnboarding<TODO[]>("https://www.swiggy.com/dapi/support/issues/partner-onboarding?", [])
    console.log("onboarding", data)





    return (
        <div>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data?.data?.issues?.data.map((data : any) => (
                    <div className="w-full" key={data.id}>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="hover:no-underline hover:text-orange-600 text-gray-600 text-lg">{data.title}</AccordionTrigger>
                                <AccordionContent className="px-5">
                                    {data.description? data.description : data.hyperLinkText}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))
            }

        </div>
    )
};

export default HelpPartOne
