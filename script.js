var encontros = [
    {"title": "1. Apresentação Geral da Disciplina - 24/08/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_1.html"},
    {"title": "2. Aula Inaugural: Direitos, Saúde, Cidadania e Diversidade - 31/08/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_2.html"},
    {"title": "3. Primeiro dia na Unidade - 14/09/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_3.html"},
    {"title": "4. Trabalho em Equipe e Técnicas Etnográficas - 21/09/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_4.html"},
    {"title": "5. IV Seminário de Saúde Coletiva - 28/09/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_5.html"},
    {"title": "6. Passeio Exploratório - 05/10/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_6.html"},
    {"title": "7. Mapa do Território - 19/10/2023", "uri": "https://limsiva.github.io/saci/encontros/dia_7.html"},
]

for (i = 0; i<= encontros.length; i++) {
    document.getElementById("encontros-list").innerHTML += "<li><a href='" + encontros[i].uri + "'>" + encontros[i].title + "</li>";
}