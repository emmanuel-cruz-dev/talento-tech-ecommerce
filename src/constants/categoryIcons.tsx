import { Laptop, Gem, Icon } from "lucide-react";
import { dress, trousers } from "@lucide/lab";

export const CATEGORY_ICONS = {
  electronics: <Laptop size={40} className="text-primary mb-2" />,
  jewelery: <Gem size={40} className="text-primary mb-2" />,
  "men's clothing": (
    <Icon iconNode={trousers} size={40} className="text-primary mb-2" />
  ),
  "women's clothing": (
    <Icon iconNode={dress} size={40} className="text-primary mb-2" />
  ),
};
