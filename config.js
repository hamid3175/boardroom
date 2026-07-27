// Edit these values, then re-upload/re-deploy this file along with index.html.
window.CONFIG = {
  tenantId: "fa0ac228-e745-4fb4-8e92-27db047aee0c",
  clientId: "78dbe819-5576-4cea-9921-f1eaccb109a3",

  // Leave as "me" if the tablet signs in AS the boardroom's own resource
  // mailbox account (recommended - simplest and needs no extra sharing).
  // If instead you sign in as a normal user who has been given delegated
  // access to the room calendar, set this to the room's email address,
  // e.g. "boardroom@yourcompany.com", and use scope Calendars.Read.Shared
  // instead of Calendars.Read below.
  roomEmail: "me",

  roomName: "Boardroom",
  timezone: "AUS Eastern Standard Time",
  refreshMinutes: 5,
  weekdaysToShow: 10,

  // Optional branding. Leave as "" to skip.
  // Easiest approach: upload an image file (e.g. background.jpg, logo.png)
  // into the same GitHub repo as index.html, then reference it by filename
  // here - no need for a full URL since it's served from the same folder.
  // A background image is automatically darkened for text readability.
  backgroundImageUrl: "background.jpg", // e.g. "background.jpg"
  logoUrl: "logo.png",            // e.g. "logo.png"

  // Delegated Graph scope requested at sign-in.
  // Use "Calendars.Read" when roomEmail is "me".
  // Use "Calendars.Read.Shared" when roomEmail is another mailbox.
  graphScope: "Calendars.Read",
};
