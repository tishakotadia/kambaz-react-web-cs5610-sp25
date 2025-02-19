// import { Button, ListGroup } from "react-bootstrap";
// import { FaCaretDown, FaPlus } from "react-icons/fa6";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import { BsGripVertical } from "react-icons/bs";
// import { IoEllipsisVerticalOutline } from "react-icons/io5";
// import { IoAddSharp } from "react-icons/io5";
// import AssignmentControll from "./AssignmentControlRight";
// import AssignmentControll1 from "./AssignmentControlLeft";


// export default function Assignments() {
//     return (
//       // <div id="wd-assignments">
//       //   <input id="wd-search-assignment"
//       //          placeholder="Search.." style={{ marginRight: "10px", height: "30px", width: "140px" }}/>
//       //   {/* <button id="wd-add-assignment-group" style={{ marginRight: "10px" }}>+ Group</button> */}
//       //   <Button variant="secondary" size="lg" className="me-1" id="wd-add-module-btn">
//       //       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//       //       Group
//       //   </Button>
//       //   {/* <button id="wd-add-assignment" style={{ marginRight: "10px" }}>+ Assignment</button> */}
//       //   <Button variant="danger" size="lg" className="me-1" id="wd-add-assignment">
//       //       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//       //       Assignment
//       //   </Button>
//       //   <h3 id="wd-assignments-title" className="mt-5">
//       //     ASSIGNMENTS 40% of Total <button>+</button>
//       //   </h3>
//       //   <ul id="wd-assignment-list">
//       //     <li className="wd-assignment-list-item">
//             // <a className="wd-assignment-link"
//             //   href="#/Kambaz/Courses/1234/Assignments/1">
//             //   A1 - ENV + HTML
//             // </a><br />
//             // <span>Multiple Modules | <strong>Not Available until</strong> May 6 at 12:00am |<br /> <strong>Due</strong> May 13 at 11:59pm | 100 pts</span>
//       //     </li>
//       //     <li className="wd-assignment-list-item">
//       //       <a className="wd-assignment-link"
//       //         href="#/Kambaz/Courses/1234/Assignments/2">
//       //         A2 - CSS + BOOTSTRAP
//       //       </a><br />
//       //       <span>Multiple Modules | <strong>Not Available until</strong> May 13 at 12:00am |<br /> <strong>Due</strong> May 20 at 11:59pm | 100 pts</span>
//       //     </li>
//       //     <li className="wd-assignment-list-item">
//       //       <a className="wd-assignment-link"
//       //         href="#/Kambaz/Courses/1234/Assignments/3">
//       //         A3 - JAVASCRIPT + REACT
//       //       </a><br />
//       //       <span>Multiple Modules | <strong>Not Available until</strong> May 20 at 12:00am |<br /> <strong>Due</strong> May 27 at 11:59pm | 100 pts</span>
//       //     </li>
//       //   </ul>
//       // </div>

//       <div id="wd-assignments">
//         <div className="row justify-content-between">
//           <div className="position-relative col-md-8">
//             <HiMagnifyingGlass className="position-absolute ms-2" style={{margin:"0 auto", height:"100%", left:"12px"}}/>
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 className="form-control wd-search-bar"
//                 style={{paddingLeft:"30px", height:"48px"}}
//             />
//           </div>
//           <div className="col-md-4">
//             <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
//                 <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                 Assignment
//             </Button>
//             <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
//                 <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                 Group
//             </Button>
//           </div>
//         </div>
        
//         <div id="wd-asignment-main-section" className="wd-title p-3 ps-2 ">
//         <ListGroup className="rounded-0" id="wd-modules">
//           <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-center">
//               <div className="ms-3">
//                 <BsGripVertical className="me-2 fs-3" /><FaCaretDown /> ASSIGNMENTS
//               </div>
//               <div className="ms-3 align-items-center">
//                 <button className="rounded-pill me-3 bg-secondary border-opacity-50">
//                   40% of total
//                 </button>
//                 <button className="border-0 bg-secondary">
//                   <IoAddSharp></IoAddSharp>
//                 </button>
//                 <IoEllipsisVerticalOutline></IoEllipsisVerticalOutline>
//               </div>
//             </div>
//           </ListGroup.Item>
//           <ListGroup.Item className="d-flex justify-content-between align-items-center p-3 wd-lesson">
//             <div className="d-flex align-items-center">
//               <AssignmentControll1 />
//               <div className="ms-3">
//                 <a
//                   href="#/Kambaz/Courses/1234/Assignments/123"
//                   className="wd-assignment-link text-black text-decoration-none"
//                 >
//                   <h5><b>A1</b></h5>
//                 </a>
//                 <p className="wd-assignment-details mb-0">
//                   <span className="text-danger"> Multiple Modules</span> |{" "}
//                   <b>Not Available until</b> May 6 at 12:00 am |
//                   <br />
//                   <b>Due </b>May 13 at 11:59 pm | 100 pts
//                 </p>
//               </div>
//             </div>
//             <AssignmentControll />
//           </ListGroup.Item>

//           <ListGroup.Item className="d-flex justify-content-between align-items-center p-3 wd-lesson">
//             <div className="d-flex align-items-center">
//               <AssignmentControll1 />
//               <div className="ms-3">
//                 <a
//                   href="#/Kambaz/Courses/1234/Assignments/123"
//                   className="wd-assignment-link text-black text-decoration-none"
//                 >
//                   <h5><b>A2</b></h5>
//                 </a>
//                 <p className="wd-assignmet-details">
//                   <span className="text-danger"> Multiple Modules</span> |{" "}
//                   <b>Not Available unitl</b> May 13 at 12:00 am |
//                   <br />
//                   <b>Due </b>May 20 at 11:59 pm | 100 pts
//                 </p>
//               </div>
//             </div>
//             <AssignmentControll />
//           </ListGroup.Item>

//           <ListGroup.Item className="d-flex justify-content-between align-items-center p-3 wd-lesson">
//             <div className="d-flex align-items-center">
//               <AssignmentControll1 />
//               <div className="ms-3">
//                 <a
//                   href="#/Kambaz/Courses/1234/Assignments/123"
//                   className="wd-assignment-link text-black text-decoration-none"
//                 >
//                   <h5><b>A3</b></h5>
//                 </a>
//                 <p className="wd-assignmet-details">
//                   <span className="text-danger"> Multiple Modules</span> |{" "}
//                   <b>Not Available unitl</b> May 20 at 12:00 am |
//                   <br />
//                   <b>Due </b>May 27 at 11:59 pm | 100 pts
//                 </p>
//               </div>
//             </div>
//             <AssignmentControll />
//           </ListGroup.Item>
//         </ListGroup>
//       </div>
//     </div>
//   );
// }
  

import { Button, ListGroup } from "react-bootstrap";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import AssignmentControll from "./AssignmentControlRight";
import AssignmentControll1 from "./AssignmentControlLeft";
import * as db from "../../Database";
import { Link, useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (
      <div id="wd-assignments">
        <div className="row justify-content-between">
          <div className="position-relative col-md-8">
            <HiMagnifyingGlass className="position-absolute ms-2" style={{margin:"0 auto", height:"100%", left:"12px"}}/>
            <input
                type="text"
                placeholder="Search..."
                className="form-control wd-search-bar"
                style={{paddingLeft:"30px", height:"48px"}}
            />
          </div>
          <div className="col-md-4">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
          </div>
        </div>
        
        <div id="wd-asignment-main-section" className="wd-title p-3 ps-2 ">
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-center">
              <div className="ms-3">
                <BsGripVertical className="me-2 fs-3" /><FaCaretDown /> ASSIGNMENTS
              </div>
              <div className="ms-3 align-items-center">
                <button className="rounded-pill me-3 bg-secondary border-opacity-50">
                  40% of total
                </button>
                <button className="border-0 bg-secondary">
                  <IoAddSharp></IoAddSharp>
                </button>
                <IoEllipsisVerticalOutline></IoEllipsisVerticalOutline>
              </div>
            </div>
          </ListGroup.Item>

          {courseAssignments.length > 0 && (
            <div>
              {courseAssignments.map((assignment) => (
                <ListGroup.Item className="d-flex justify-content-between align-items-center p-3 wd-lesson">
                    <div className="d-flex align-items-center">
                      <AssignmentControll1 />
                        <div className="mt-3">
                            <div key={assignment._id} className="ms-3 assignment-item">
                            <Link
                              to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                              className="wd-assignment-link text-black text-decoration-none"
                            >
                              <strong>{assignment._id}</strong>
                            </Link>
                            <p className="wd-assignment-details mb-0">
                              <span className="text-danger">{assignment.title}</span> |{" "}
                              <b>Not Available until</b> {assignment.availableFrom} |
                              <br />
                              <b>Due </b>{assignment.dueDate} | {assignment.points} pts
                            </p>
                          </div>
                        </div>
                    </div>
                    <AssignmentControll />
                </ListGroup.Item>
              ))}
            </div>
          )}
        </ListGroup>

      </div>
    </div>
  );
}