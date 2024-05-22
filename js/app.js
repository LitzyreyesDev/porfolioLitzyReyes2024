document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("videoModal");
    var closeModal = document.querySelector(".close");
    var dashboardBtn = document.getElementById("dashboard");
    var appBtn = document.getElementById("app");
    var dashboardBtnUnicornio = document.getElementById("dashboardunicornio");
    var appUnicornio = document.getElementById("unicornioapp");
    var tictactoe = document.getElementById("tictactoe");

    dashboardBtn.onclick = function() {
      modal.style.display = "block";
      // Establecer la URL del video para el Dashboard Centro Dental
      document.getElementById("videoFrame").src = "https://www.youtube.com/embed/9fZ4UmGtyFw";
    }
  
    appBtn.onclick = function() {
      modal.style.display = "block";
      // Establecer la URL del video para la App Centro Dental Infantil
      document.getElementById("videoFrame").src = "https://www.youtube.com/embed/IZsVF4qpVrA";
    }
    
    appUnicornio.onclick = function() {
      modal.style.display = "block";
      // Establecer la URL del video para la App Unicornio
      document.getElementById("videoFrame").src = "https://www.youtube.com/embed/P_YguAhiXWQ";
    }
  
    dashboardBtnUnicornio.onclick = function() {
      modal.style.display = "block";
      // Establecer la URL del video para el Dashboard Unicornio
      document.getElementById("videoFrame").src = "https://www.youtube.com/embed/Me9hPZtEVyc";
    }

    tictactoe.onclick = function() {
      modal.style.display = "block";
      // Establecer la URL del video para el Dashboard Unicornio
      document.getElementById("videoFrame").src = "https://www.youtube.com/embed/IcA7Chnwbd8";
    }
    
    closeModal.onclick = function() {
      modal.style.display = "none";
      // Detener la reproducción del video al cerrar el modal
      document.getElementById("videoFrame").src = "";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        // Detener la reproducción del video si se hace clic fuera del modal
        document.getElementById("videoFrame").src = "";
      }
    }
    
    // Evento para cerrar el modal cuando se presiona la tecla "Esc"
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
        // Detener la reproducción del video al cerrar el modal
        document.getElementById("videoFrame").src = "";
      }
    });
  });
  