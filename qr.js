<script src="https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js"></script>
<script>
function generateQR(text) {
  document.getElementById("qr").innerHTML = "";
  new QRCode(document.getElementById("qr"), {
    text,
    width: 200,
    height: 200
  });
}
</script>
