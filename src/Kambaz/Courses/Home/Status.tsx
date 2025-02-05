// export default function CourseStatus() {
//     return (
//       <div id="wd-course-status" style={{paddingLeft: "10px"}}>
//         <h2>Course Status</h2>
//         <div style={{ display: "flex", alignItems: "center", paddingBottom: "10px"}}>
//             <button style={{ marginRight: "10px" }}>Unpublish</button>
//             <button style={{ marginRight: "10px" }}>Publish</button>
//         </div>
//         <div className="d-flex flex-column gap-1">
//             <button className="btn-secondary">Import Existing Content</button>
//             <button>Import from Commons</button>
//             <button>Choose from Homepage</button>
//             <button>View Course Stream</button>
//             <button>New Announcement</button>
//             <button>New Analytics</button>
//             <button>View Course Notifications</button>
//         </div> 
//     </div>
//   );}
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { IoIosNotifications, IoMdHome } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiBarChart2Fill } from "react-icons/ri";
export default function CourseStatus() {
 return (
   <div id="wd-course-status" style={{ width: "310px", paddingLeft: "10px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish 
            </Button>
          </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish 
            </Button> 
          </div>
      </div>
      <br />
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <IoMdHome className="me-2 fs-5" /> Choose from Homepage </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <RiBarChart2Fill className="me-2 fs-5" /> View Course Stream </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <TfiAnnouncement className="me-2 fs-5" /> New Announcement </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <RiBarChart2Fill className="me-2 fs-5" /> New Analytics </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <IoIosNotifications className="me-2 fs-5" /> View Course Notifications </Button>
   </div> );}