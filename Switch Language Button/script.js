/* Grab all necessary elements*/
const langEl = document.querySelector(".langWrap");

const link = document.querySelectorAll("a");

const titleEl = document.querySelector(".title");

const descrEl = document.querySelector(".description");

link.forEach(el => {
    el.addEventListener("click", () => {
        langEl.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        const attr = el.getAttribute("language");

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
    });
});

var data = {
    "english":
    {
        "title": "Hello World",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum perspiciatis excepturi incidunt, sequi aperiam eligendi, veniam cum voluptas corporis dolor tempora, iste facilis reiciendis perferendis nam fugiat id a maxime laboriosam inventore neque. Consequuntur distinctio nulla error id, sed omnis non maiores dignissimos, eaque sit atque velit rem magni. Tempore voluptatum esse impedit porro! Quae quo officiis eos assumenda quaerat? Nesciunt odio ut rem magni, nobis, quos amet vel porro animi repudiandae voluptas officiis quisquam libero ab, voluptates recusandae?"
    },
    "kazakh": {
        "title": "Сәлем Әлем",
        "description": "Ауырсынудың өзі негізгі адипицирлеуші ​​элита үшін маңызды. Сіз бұлардың ешқайсысын кездестірмейсіз, олар оны ұстап алады, оның соңынан ереді, таңдауға ашылады, дененің рахатын, уақыттың азабын ойлап табады, оны төзімді хабарлармен оңай қабылдамайды, өйткені ол емес. бұл ең еңбекқор өнертапқыштан аулақ болу. Бұл айырмашылықтан ешқандай қателік туындамайды, бірақ олардың әрқайсысы құрметке лайық емес, және бұл үлкен маңызды нәрсе. Ләззат уақыты оны одан әрі болдырмайды! Ол оларды орындау үшін қандай міндеттерді іздеуі керек? Олар біз үшін маңызды нәрсені, біз жақсы көретін нәрсені немесе оның үстіне, біздің жанның міндеттерімізден бас тарту ләззатын қалай жек көру керектігін білмейді және қалайша біз қабылдауға тиіс ләззаттардан ешкім құтыла алады?"
    },
    "japanese": {
        "title": "こんにちは世界",
        "description": "痛み自体は、主要な肥満エリートにとって重要です。あなたはそれらのどれにも会わないでしょう、彼らは彼を捕まえ、彼に従い、選択を受け入れ、体の喜び、時間の痛みを発明し、それがそうではないので、永続的なメッセージでそれを簡単に受け入れません。それは最も勤勉な発明者を避けることです。この違いには何の問題もありませんが、すべてが尊敬に値するわけではなく、これは非常に重要なことです。喜びの時間はそれをさらに防ぐでしょう！それらを遂行するために彼はどのようなタスクを探す必要がありますか？彼らは私たちにとって何が重要か、私たちが何を愛しているか、さらには私たちの魂の責任を放棄する喜びを憎む方法を知りません。"
    }
}
