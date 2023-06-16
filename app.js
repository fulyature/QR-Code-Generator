const frm = document.querySelector(".frm");

const qrData = document.getElementById("qrData");

const qrCodes = document.getElementById("qrCodes");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  createQR(qrData.value);
});

const createQR = (talep) => {
  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size150x150=&data=${talep}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("hata var");
      }

      return response;
    })
    .then((data) => {
      domaYaz(data.url);

      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const domaYaz = (gelenData) => {
  qrCodes.innerHTML = `
    
    <a href="${gelenData}" download target="_blank"><img src="${gelenData}" alt="qrcode"></a>
    
    `;

  qrData.value = "";
  qrData.focus();
};
