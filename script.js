  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  <script>
function handleSubmit(event) {
  event.preventDefault();

  let toastEl = document.getElementById('liveToast');
  let toast = new bootstrap.Toast(toastEl, {
    delay: 3000
  });

  toast.show();
}
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", function(){
    document.getElementById("modalImg").src = this.src;
    let modal = new bootstrap.Modal(document.getElementById("imgModal"));
    modal.show();
  });
});
</script>

  <script>
function toggleDark(){
  document.body.classList.toggle("dark-mode");
}
</script>
