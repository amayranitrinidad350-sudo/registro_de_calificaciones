function promedio() {
    let n1 = Number(document.getElementById("c1").value);
    let n2 = Number(document.getElementById("c2").value);
    let n3 = Number(document.getElementById("c3").value);
    let n4 = Number(document.getElementById("c4").value);
    let n5 = Number(document.getElementById("c5").value);
    let prom = (n1 + n2 + n3 + n4 + n5) / 5;
    document.getElementById("resultado").innerHTML =
    "Promedio: " + prom;
}