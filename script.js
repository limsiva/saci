var encontros = [
    {"title": "1. Apresentação Geral da Disciplina - 24/08/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_1.html"},
    {"title": "2. Aula Inaugural: Direitos, Saúde, Cidadania e Diversidade - 31/08/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_2.html"},
    {"title": "6. Passeio Exploratório - 05/10/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_6.html"},
]

for (i = 0; i<= encontros.length; i++) {
    document.getElementById("encontros-list").innerHTML += "<li><a href='" + encontros[i].uri + "'>" + encontros[i].title + "</li>";
}