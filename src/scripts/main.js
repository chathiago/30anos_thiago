AOS.init();

const dataAniv = new Date("March 12, 2026 20:00:00");
const timeStampAniv = dataAniv.getTime();

const contadorHoras = setInterval(()=> {
    let agora = new Date();
    let timeStampAgora = agora.getTime();
    let diferencaTempo = timeStampAniv - timeStampAgora;

    if (diferencaTempo < 0) {
        clearInterval(contadorHoras);
        document.getElementById("contador").innerHTML = "Já começou!";
        return;
    }

    let diasAteEvento = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    let horasAteEvento = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutosAteEvento = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
    let segundosAteEvento = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `Faltam ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
})