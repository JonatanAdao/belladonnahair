
    function iniciarContagem() {
        let tempoRestante = 60 * 60 * 24; // 1 dia em segundos

        function atualizarContador() {
            let horas = Math.floor(tempoRestante / 3600);
            let minutos = Math.floor((tempoRestante % 3600) / 60);
            let segundos = tempoRestante % 60;

            document.getElementById("contador").innerText = 
                `${horas}h ${minutos}m ${segundos}s`;

            if (tempoRestante > 0) {
                tempoRestante--;
                setTimeout(atualizarContador, 1000);
            } else {
                document.getElementById("contador").innerText = "Promoção Expirada!";
            }
        }

        atualizarContador();
    }

    iniciarContagem();
