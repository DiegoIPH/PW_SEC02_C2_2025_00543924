document.addEventListener("DOMContentLoaded", () => {

  const headerH1 = document.querySelector("#header h1");
  const infoSection = document.querySelector("#info");
  const topSection = document.querySelector("#top");
  const imageUrlInput = document.querySelector("#imageUrl");
  
  const btnTitulo = document.querySelector("#btnTitulo");
  const btnOrden = document.querySelector("#btnOrden");
  const btnColorTitulos = document.querySelector("#btnColorTitulos");
  const btnImagen = document.querySelector("#btnImagen");
  
  function changeHeaderTitle() {
    headerH1.textContent = "HTML & CSS: Curso práctico avanzado";
  }
  
  function toggleInfoOrder() {
    infoSection.classList.toggle("columnas");
  }
  
  function toggleSectionStyles() {
    infoSection.classList.toggle("cambioColor");
    infoSection.classList.toggle("cambioFuente");
  }
  
  function addImageFromUrl() {
    const imageUrl = imageUrlInput.value;
    
    if (imageUrl) {
      const newImage = document.createElement("img");
      newImage.src = imageUrl;
      newImage.alt = "Imagen subida por el usuario";
      
      topSection.appendChild(newImage);
    } else {
      alert("Por favor, ingrese una URL de imagen.");
    }
  }
  
  btnTitulo.addEventListener("click", changeHeaderTitle);
  btnOrden.addEventListener("click", toggleInfoOrder);
  btnColorTitulos.addEventListener("click", toggleSectionStyles);
  btnImagen.addEventListener("click", addImageFromUrl);
});
