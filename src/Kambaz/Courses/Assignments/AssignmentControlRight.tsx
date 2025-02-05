import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenChecks";
export default function AssignmentControll() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
