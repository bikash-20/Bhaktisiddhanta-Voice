/**
 * Bhaktisiddhanta Voice — Form Submission Backend (Google Apps Script Web App)
 *
 * HOW TO USE
 * ----------
 * 1. Create a Google Sheet. Add these headers in row 1:
 *      Timestamp | Form Type | Full Name | WhatsApp | Phone | Email |
 *      University | Graduation Year | Course | Message
 *
 * 2. In the Sheet, click Extensions → Apps Script. Delete any starter code and paste this file.
 *
 * 3. Click "Deploy" → "New deployment" → Type: "Web app".
 *      - Execute as:  Me
 *      - Who has access: Anyone
 *    Click Deploy, copy the Web App URL.
 *
 * 4. In your Next.js project, create `.env.local`:
 *      NEXT_PUBLIC_FORMS_ENDPOINT=<paste the URL>
 *
 * 5. Submit a test form. Confirm:
 *      - A new row appears in the sheet.
 *      - Both emails receive a notification:
 *          biplobgolder600@gmail.com
 *          bikashtalukder040@gmail.com
 */

const NOTIFY_EMAILS = ["biplobgolder600@gmail.com", "bikashtalukder040@gmail.com"];
const SHEET_NAME = "Form Responses"; // change if your sheet tab has a different name

function doPost(e) {
  try {
    var data = {};
    try {
      data = JSON.parse(e.postData.contents || "{}");
    } catch (err) {
      data = {};
    }

    // Map form keys
    var formType = data.formType || "course";
    var fullName = (data.fullName || "").toString().trim();
    var whatsapp = (data.whatsapp || "").toString().trim();
    var phone = (data.phone || "").toString().trim();
    var email = (data.email || "").toString().trim();
    var university = (data.university || "").toString().trim();
    var graduationYear = (data.graduationYear || "").toString().trim();
    var course = (data.course || "").toString().trim();
    var message = (data.message || "").toString().trim();
    var submittedAt = data.submittedAt || new Date().toISOString();

    // Append row to the sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
              || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      submittedAt, formType, fullName, whatsapp, phone, email,
      university, graduationYear, course, message
    ]);

    // Email notification
    var subject =
      formType === "alumni" ? "[Alumni] " + fullName + " just reconnected"
      : formType === "contact" ? "[Contact] " + fullName + " sent a message"
      : "[Course] " + fullName + " registered" + (course ? " for " + course : "");

    var body =
      "A new submission just came in.\n\n" +
      "Form: " + formType + "\n" +
      "Time: " + submittedAt + "\n\n" +
      "Full Name: " + fullName + "\n" +
      "WhatsApp:  " + whatsapp + "\n" +
      "Phone:     " + phone + "\n" +
      "Email:     " + email + "\n" +
      "University: " + university + "\n" +
      "Graduation Year: " + graduationYear + "\n" +
      "Course:    " + course + "\n" +
      "Message:   " + message + "\n";

    NOTIFY_EMAILS.forEach(function (to) {
      MailApp.sendEmail({
        to: to,
        subject: subject,
        body: body,
        replyTo: email || undefined,
      });
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Allow GET for sanity testing in browser
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "ok",
      message: "Bhaktisiddhanta Voice form endpoint is live. Use POST to submit."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
