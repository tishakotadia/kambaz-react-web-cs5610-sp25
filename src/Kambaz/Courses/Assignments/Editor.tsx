 export default function AssignmentEditor() {
    return (
    <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
        The landing page should include the following: Your full name and section Links to the Kanbas application
        Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                <input id="wd-points" value={100} />
                </td>
            </tr>
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

            <tr>
              <td></td>
              <td>
                <h4>Online Entry Options</h4>
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

            <tr>
              <td align="right">
                <label htmlFor="wd-assign-to">Assign</label>
              </td>
              <td>Assign to
                <input id="wd-assign-to" value="Everyone" />
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input type="date" id="wd-due-date" value="2024-05-13" />
              </td>
            </tr>
            
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input type="date" id="wd-available-from" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Until</label>
              </td>
              <td>
                <input type="date" id="wd-available-until" />
              </td>
            </tr>

        </table>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button>Cancel</button>
          <button style={{ marginLeft: "10px" }}>Save</button>
        </div>

    </div>
);}