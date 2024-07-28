import usePartnerOnboarding from "@/utils/usePartnerOnboarding";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ReactNode } from "react";

interface TODO {
    hyperLinkText: ReactNode;
    title: string;
    description: string;
    id: number
}

interface APIResponse {
    data: {
        issues: {
            data: TODO[]
        }
    }
}

const HelpPartOne = () => {
    const response = usePartnerOnboarding<APIResponse>("https://www.swiggy.com/dapi/support/issues/partner-onboarding?", {
        data: {
            issues: {
                data: []
            }
        }
    })

    console.log("onboarding", response)

    return (
        <div>
            {
                response?.data?.issues?.data.map((item: TODO) => (
                    <div className="w-full" key={item.id}>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="hover:no-underline hover:text-orange-600 text-gray-600 text-lg">{item.title}</AccordionTrigger>
                                <AccordionContent className="px-5">
                                    {item.description ? item.description : item.hyperLinkText}
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