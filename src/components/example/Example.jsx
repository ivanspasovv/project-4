import Link from "../link/Link";
import styles from "./Example.module.scss";
import InfoCardSteps from "../how/Step";
import { Stepper } from "@mui/material";
import How from "../how/How";

const items = [
  { number: "1", title: "Info Card 1", description: "Description of info card" },
  { number: "2", title: "Info Card 2", description: "Description of info card" },
  { number: "3", title: "Info Card 3", description: "Description of info card" },
];

export default function Copyright() {
  
  return (
    <Stepper>
      <InfoCardSteps items={items} />
    </Stepper>
  );
}
