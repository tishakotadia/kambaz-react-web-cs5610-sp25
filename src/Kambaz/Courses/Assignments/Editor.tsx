 export default function AssignmentEditor() {
    return (
    <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br />
        <input id="wd-name" value="A1 - ENV + HTML" style={{marginTop: "10px"}} /><br /><br />
        <textarea rows={10} cols={40} id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
        The landing page should include the following: Your full name and section Links to the Kanbas application
        Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table>
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                <input id="wd-points" value={100} />
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                <select id="wd-group">
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="PROJECT">PROJECT</option>
                </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                <select id="wd-display-grade-as">
                <option selected value="Percentage">Percentage</option>
                <option value="GPA">GPA</option>
                </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                <select id="wd-submission-type">
                <option selected value="Online">Online</option>
                <option value="Offline">Offline</option>
                </select>
                </td>
            </tr>
            <br />
            <tr>
              <td></td>
              <td>
                Online Entry Options
                <div>
                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" />
                  <label htmlFor="wd-website-url">Website URL</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div>
                <input type="checkbox" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </td>
            </tr>
            <br />
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              Assign To
            </td>
            </tr>
            <tr>
              <td></td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <br />
          <tr>
            <td ></td>
            <td >
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
          <td></td>
            <td>
              <input type="date" id="wd-due-date" value="2024-13-05" />
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td></td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="date" id="wd-available-from" value="2024-06-05" />
            </td>
            <td></td>
            <td>
              <input type="date" id="wd-available-until" value="2024-20-05" />
            </td>
          </tr>
        </table>
        <hr />
        <button style={{marginLeft: "300px", marginRight: "10px"}}>Cancel</button>
        <button>Save</button>
      </div>
  );}