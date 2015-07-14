/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('bioIntegrator').controller('SwitchLanguageController', SwitchLanguageController);

function SwitchLanguageController($translate, $scope) {
    $scope.toggleLang = function () {
        $translate.uses() === 'en_EN' ? $translate.uses('pt_BR') : $translate.uses('en_EN');
    };
}
;

angular.module('bioIntegrator').config(['$translateProvider', function ($translateProvider) {

        // Simply register translation table as object hash
        $translateProvider.translations('en_EN', {
            'TITLE': 'Bio-ABA - The new Integrator between Applications, Biological databases and algorithms',
            'SIMPLE_TITLE': 'Bio-ABA',
            'SIMPLE_SUBTITLE': 'The new Integrator between Applications, biological Databases and Algorithms.',
            'DEVELOPED_BY': 'Developed by Jéssica Thaisa Almeida',
            'GO_TO_TOP': 'Go to top',
            'COPY_RIGHT': 'All rights reserved.',
            'VERSION': 'Version',
            'HOME': 'Home',
            'HELP': 'Help',
            'CONTACT': 'Contact Us',
            'CATEGORIES' : "Categories",
            'WHO_WE_ARE' : "Who we are",
            'DATABASETITLE_LABEL': 'Choose a database to use:',
            'DATABASETITLE_SELECT': '-- Choose the database --',
            'DATABASENAME_LABEL': 'Name',
            'DATABASEDESCRIPTION_LABEL': 'Description',
            'DATABASEFORMAT_LABEL': 'Format',
            'ALGORITHMTITLE_LABEL': 'Choose an algorithm to execute:',
            'ALGORITHMTITLE_SELECT': '-- Choose the algorithm --',
            'ALGORITHMNAME_LABEL': 'Name',
            'ALGORITHMDESCRIPTION_LABEL': 'Description',
            'ALGORITHMPROVIDER_LABEL': 'Provider',
            'ALGORITHMFORMAT_LABEL': 'Allowed formats',
            'ALGORITHMPROVIDER_NULL': "Not informed provider",
            'SEND_TASK': "Send Task",
            'TEXT_HELP': "Bio-ABA was developed with the aim of bringing academical comunity and labs envolved with molecular biology, proposing to be a unified point of knowledgement and tecnology dissemination." + 
                    " By means of Bio-ABA is possible use and provide algorithms, applications and databases from Molecular Biology.",
            'WRITE_QUERY': "Write a query:",
            'CHOOSE_FILE': "... Or Choose a file:",
            'CLEAR': "Clear",
            'CLEAR_FILE': "Clear file",
            'CLICKING_HERE': "clicking here",
            'INITIAL_TEXT' : "Bio-ABA is an iniciative that aims to integrate the " + 
                "various laboratories and researchers of Molecular Biology " +
                "through the exchange of knowledge and the availability of algorithms developed " +
                "and created databases in order to disseminate tecnology produced, " +
                "thus promoting a better use of tecnology for the growth of area.",
            'HOME_TEXT_1' : "Through Bio-ABA is possible to provide Applications, Algorithms and " +
                    "Databases from Molecular Biology for the use of the comunity " +
                    "without necessarily provide the source code.",
            'HOME_TEXT_2' : "It was born of the desire of to spread knowledge to the molecular biology research community. " +
                    "Often this knowledge is retained in one research center " +
                    "or one laboratory, which does not allow growth and more rapid developments in this area.",
            'HOME_TEXT_3' : "One way to contribute is sending us your algorithm or database by the use of an API to comunicate with our systems. " +
                    "Know more about this API by ",
            'HOME_TEXT_4' : "Furthermore is also possible contribute proposing new ways to grow our architecture. "+
                    "For this, you can access our source code that is on github. Know more by ",
            'JESSICA_SIMPLE_DESCRIPTION':  "Student of Undergraduation in Science Computing in PUC-Rio. " +
                    "Developer of Bio-ABA and enthusiast in technology."
        });
        // Simply register translation table as object hash
        $translateProvider.translations('pt_BR', {
            'TITLE': 'Bio-ABA - Um novo integrador entre Aplicações, bancos de dados e algoritmos da biologia molecular',
            'SIMPLE_TITLE': 'Bio-ABA',
            'SIMPLE_SUBTITLE': 'Um novo integrador entre Aplicações, Bancos de Dados e Algoritmos da biologia molecular.',
            'DEVELOPED_BY': 'Desenvolvido por Jéssica Thaisa Almeida',
            'COPY_RIGHT': 'Todos os direitos reservados.',
            'GO_TO_TOP': 'Ir para o topo',
            'VERSION': 'Versão',
            'HOME': 'Página Inicial',
            'HELP': 'Ajuda',
            'CONTACT': 'Contate-nos',
            'CATEGORIES' : "Categorias",
            'WHO_WE_ARE' : "Quem somos nós",
            'DATABASETITLE_LABEL': 'Escolha um banco de dados:',
            'DATABASETITLE_SELECT': '-- Escolha o banco de dados --',
            'DATABASENAME_LABEL': 'Nome',
            'DATABASEDESCRIPTION_LABEL': 'Descrição',
            'DATABASEFORMAT_LABEL': 'Formato',
            'ALGORITHMTITLE_LABEL': 'Escolha um algoritmo:',
            'ALGORITHMTITLE_SELECT': '-- Escolha o algoritmo --',
            'ALGORITHMNAME_LABEL': 'Nome',
            'ALGORITHMDESCRIPTION_LABEL': 'Descrição',
            'ALGORITHMPROVIDER_LABEL': 'Provedor',
            'ALGORITHMFORMAT_LABEL': 'Formatos aceitos',
            'ALGORITHMPROVIDER_NULL': "Provedor não informado",
            'SEND_TASK': "Enviar Tarefa",
            'TEXT_HELP': "O Bio-ABA foi desenvolvido com o objetivo de aproximar a comunidade academica e os laboratórios envolvidos com a biologia molecular, se propondo a ser um ponto de unificação de conhecimentos e de disseminação de tecnologia." +
                    " Através do Bio-ABA é possível utilizar e disponibilizar Algoritmos, Aplicações e Bases de Dados da Biologia Molecular.",
            'WRITE_QUERY': "Escreva a query:",
            'CHOOSE_FILE': "... Ou Escolha um Arquivo:",
            'CLEAR': "Limpar",
            'CLEAR_FILE': "Limpar arquivo",
            'CLICKING_HERE': "clicando aqui",
            'INITIAL_TEXT' : "O Bio-ABA é uma iniciativa que busca integrar " + 
                "os diversos laboratórios e pesquisadores da Biologia Molecular  " +
                "através da troca de  " +
                "conhecimentos e da disponibilização dos algoritmos desenvolvidos " +
                "e das bases criadas com o intuito de disseminar a tecnologia  " +
                "produzida, promovendo assim uma melhor utilização da tecnologia  " +
                "para o crescimento da área.",
            'HOME_TEXT_1' : "Através do Bio-ABA pode-se disponiblizar Aplicações, Algoritmos e " +
                    "Bases de dados da Biologia Molecular para utilização da comunidade, " +
                    "sem necessariamente, disponibilizar os códigos-fontes destes.",
            'HOME_TEXT_2' : "Esta iniciativa nasceu do desejo de disseminar conhecimento na " +
                    "comunidade de pesquisadores da Biologia Molecular. Muitas vezes " +
                    "o conhecimento fica retido em um centro de pesquisa " +
                    "ou em um laboratório o que não permite o crescimento e evolução " +
                    "mais rápidos da área.",
            'HOME_TEXT_3' : "Uma das formas de colaborar é enviando-nos seu algoritmo " +
                    "ou base de dados para que incluamos para disponibilização. " +
                    "Você não precisa disponibilizar o código-fonte! " +
                    "Nós fornecemos uma API que pode ser utilizada para que possamos " +
                    "nos conectar aos seus projetos. Saiba mais sobre a API ",
            'HOME_TEXT_4' : "Além disso também é possível colaborar propondo novas formas de crescer a arquitetura, para tal pode acessar nosso código que estão no github. Saiba mais ",
            'JESSICA_SIMPLE_DESCRIPTION' : "Estudante de Graduação em Ciência da Computação na PUC-Rio. " +
                    "Desenvolvedora do sistema e entusiasta em tecnologia. "
        });

        $translateProvider.uses('en_EN');
        $translateProvider.rememberLanguage(true);

    }]);