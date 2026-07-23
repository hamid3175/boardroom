// Edit these values, then re-upload/re-deploy this file along with index.html.
window.CONFIG = {
  tenantId: "YOUR_TENANT_ID",
  clientId: "YOUR_SPA_CLIENT_ID",

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
  weekdaysToShow: 5,

  // Delegated Graph scope requested at sign-in.
  // Use "Calendars.Read" when roomEmail is "me".
  // Use "Calendars.Read.Shared" when roomEmail is another mailbox.
  graphScope: "Calendars.Read",
};
