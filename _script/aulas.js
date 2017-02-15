//Quadro de disciplinas. Qualquer alteração de grade deverá ser feito apenas aqui.
var disciplina = [];
disciplina[0] = {periodo:"primeiro", nome:"Introdução a Informática", cod:"ead05001", aulas:13};
disciplina[1] = {periodo:"primeiro", nome:"Projeto de Desenvolvimento de Algorismos", cod:"ead05005", aulas:15};
disciplina[2] = {periodo:"primeiro", nome:"Construção de Páginas WEB", cod:"ead05002", aulas:20};
disciplina[3] = {periodo:"segundo", nome:"Fundamentos de Algoritmo para Computação", cod:"ead05004", aulas:24};
disciplina[4] = {periodo:"segundo", nome:"Organização de Computadores", cod:"ead05010", aulas:10};
disciplina[5] = {periodo:"segundo", nome:"Fundamentos de Programação (Pascal)", cod:"ead05009", aulas:14};
disciplina[6] = {periodo:"segundo", nome:"Fundamentos de Programação (Python)", cod:"ead05029", aulas:12};
disciplina[7] = {periodo:"segundo", nome:"Álgebra Linear", cod:"ead05006", aulas:15};
disciplina[8] = {periodo:"terceiro", nome:"Matemática para Computação", cod:"ead05008", aulas:9};
disciplina[9] = {periodo:"terceiro", nome:"Física para Computação", cod:"ead05015", aulas:26};
disciplina[10] = {periodo:"terceiro", nome:"Estrutura de Dados", cod:"ead05007", aulas:36};
disciplina[11] = {periodo:"terceiro", nome:"Programação com Interfaces Gráficas (Pascal)", cod:"ead05013", aulas:17};
disciplina[12] = {periodo:"terceiro", nome:"Programação com Interfaces Gráficas (Python)", cod:"ead05030", aulas:17};
disciplina[13] = {periodo:"quarto", nome:"Probabilidade e Estatistica", cod:"ead05012", aulas:12};
disciplina[14] = {periodo:"quarto", nome:"Modelagem de Informação", cod:"ead05011", aulas:23};
disciplina[15] = {periodo:"quarto", nome:"Sistemas Operacionais", cod:"ead05016", aulas:12};
disciplina[16] = {periodo:"quarto", nome:"Banco de Dados", cod:"ead05014", aulas:29};
disciplina[17] = {periodo:"quarto", nome:"Programação Orientada a Objetos", cod:"ead05021", aulas:13};
disciplina[18] = {periodo:"quinto", nome:"Engenharia de Software", cod:"ead05019", aulas:18};
disciplina[19] = {periodo:"quinto", nome:"Redes de Computadores I", cod:"ead05020", aulas:14};
disciplina[20] = {periodo:"quinto", nome:"Análise de Sistemas", cod:"ead05018", aulas:24};
disciplina[21] = {periodo:"quinto", nome:"Programação de Aplicações WEB", cod:"ead05017", aulas:14};
disciplina[22] = {periodo:"sexto", nome:"Empreendedorismo e Ética", cod:"ead05024", aulas:14};
disciplina[23] = {periodo:"sexto", nome:"Redes de Computadores II", cod:"ead05025", aulas:23};
disciplina[24] = {periodo:"sexto", nome:"Arquitetura de Sistemas", cod:"ead05022", aulas:21};
disciplina[25] = {periodo:"sexto", nome:"Computação Gráfica", cod:"ead05023", aulas:19};

function escreveaulas(n) {   // Função para escrever as aulas da disciplina escolhida na página principal.
    var conteudo = "<h4>" + disciplina[n].nome + "</h4>";
    for(var i = 1; i <= disciplina[n].aulas; i++) {
        if (i < 10) {
            conteudo += "<a href='http://videoaula.rnp.br/v.php?f=/cederj/sistemas_comp/" + disciplina[n].cod + "/Aula_00" + i + "/Aula_00" + i +".xml' target='_blank'><p>Aula 0" + i + "</p></a>";
        } else {
            conteudo += "<a href='http://videoaula.rnp.br/v.php?f=/cederj/sistemas_comp/" + disciplina[n].cod + "/Aula_0" + i + "/Aula_0" + i +".xml'target='_blank'><p>Aula " + i + "</p></a>";
        }
    }
    document.getElementById("aulas").innerHTML = conteudo;
    document.getElementById("check").checked = false;
}

function carrega() {    //Essa função acontece no carregamento da página para que todas as disciplinas possam ser escritas automaticamente. Qualquer alteração de disciplina deverá ser feita somente nesta página.
    var periodo = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto"];
    var conteudo = ["", "", "", "", "", ""];
    for(var i = 0; i < periodo.length; i++) {
        for (var j = 0; j < disciplina.length; j++) {
            if (disciplina[j].periodo == periodo[i]) {
                conteudo[i] += "<button class='link' onclick='escreveaulas(" + j + ")'>  " + disciplina[j].nome + "</button>";
            }
        }
    }
    for (var k = 0; k < periodo.length; k++) {
        document.getElementById(periodo[k]).innerHTML = conteudo[k];
    }
}
