let nombres = [];

        function agregarNombre() {
            let nombreInput = document.getElementById("nombre").value.trim();
            if (nombreInput === "") {
                alert("El nombre no puede estar vacío");
                return;
            }
            if (nombres.includes(nombreInput)) {
                alert("Este nombre ya ha sido agregado");
                return;
            }
            nombres.push(nombreInput);
            let li = document.createElement("li");
            li.textContent = nombreInput;
            document.getElementById("lista").appendChild(li);
            document.getElementById("nombre").value = "";
        }

        function asignarAmigo() {
            if (nombres.length < 2) {
                alert("Debe haber al menos 2 participantes");
                return;
            }
            let mezclados = [...nombres].sort(() => Math.random() - 0.5);
            let asignado = mezclados[Math.floor(Math.random() * mezclados.length)];
            document.getElementById("resultado").textContent = "Tu amigo invisible es: " + asignado;
        }