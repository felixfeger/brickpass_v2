<script>
function getTicket() {
  return JSON.parse(localStorage.getItem("ticket"));
}

function saveTicket(ticket) {
  localStorage.setItem("ticket", JSON.stringify(ticket));
}

function createTicket() {
  const ticket = {
    id: "TICKET-" + Math.floor(Math.random() * 100000),
    passes: {
      single: 0,
      day: 0,
      week: 0
    },
    activePass: null,
    activatedAt: null
  };
  saveTicket(ticket);
  return ticket;
}

function addPass(type) {
  const ticket = getTicket();
  ticket.passes[type]++;
  saveTicket(ticket);
}
</script>
