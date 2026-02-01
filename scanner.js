<script src="https://unpkg.com/html5-qrcode"></script>
<script>
function activatePass() {
  const ticket = getTicket();
  if (!ticket) return "No ticket";

  if (ticket.activePass) return "Already activated";

  if (ticket.passes.single > 0) {
    ticket.passes.single--;
    ticket.activePass = "single";
    ticket.activatedAt = Date.now();
  } else if (ticket.passes.day > 0) {
    ticket.passes.day--;
    ticket.activePass = "day";
    ticket.activatedAt = Date.now();
  } else if (ticket.passes.week > 0) {
    ticket.passes.week--;
    ticket.activePass = "week";
    ticket.activatedAt = Date.now();
  } else {
    return "No passes available";
  }

  saveTicket(ticket);
  return "Activated: " + ticket.activePass;
}

const scanner = new Html5Qrcode("reader");
scanner.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  (decodedText) => {
    const ticket = getTicket();
    if (!ticket || decodedText !== ticket.id) {
      document.getElementById("result").innerText = "Invalid ticket";
      return;
    }
    document.getElementById("result").innerText = activatePass();
  }
);
</script>
