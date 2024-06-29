import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import MenuCard from "./MenuCard"
import { Card1 } from "@/data/data";
interface RestaurantCardProps {
  data: Card1;

}

  

const RestaurantCategory: React.FC<RestaurantCardProps> = ({data}) => {
  console.log("this is data",data)
    return (
      <>
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{data.title}</AccordionTrigger>
    <AccordionContent>
       {
        data.itemCards.card
       }
    </AccordionContent>
  </AccordionItem>
</Accordion>

      </>
    )
}
export default RestaurantCategory