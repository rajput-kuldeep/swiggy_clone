import { Card } from "@/data/data";



interface MenuCardProps {
  menuHeader : Card
}
const MenuHeader:React.FC<MenuCardProps> = ({menuHeader} : MenuCardProps) => {
  return (
    <div className="">
         <h1>{menuHeader.card.info?.name}</h1>
    </div>
  )
};

export default MenuHeader
