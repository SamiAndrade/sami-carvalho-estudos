import {useState, useEffect} from "react";

const Piadas = () => {
    const [piadas, setPiadas] = useState([]);
    const [piadaAdicionada, setPiadaAdicionada] = useState("");
    const [resposta, setResposta] = useState("");
    const [vizualizarResposta, setVizualizarResposta] = useState({});

    const apiPiadas =  [
        {"id": "01", "joke":"Qual parte do corpo que te torna um deus?", "response": "BE-GODE!"},
        {"id": "02", "joke":"Por que a maçã não queria para de correr na corrida?", "response": "Porque, se não, a uva passa!"},
        {"id": "03", "joke":"O que o cavalo foi fazer no orelhao?", "response": "Passar um trote!"},
        {"id": "04", "joke":"O que o exterminador do futuro falou quando o seu tecnico de informática perguntou: instala o XP?", "response": "Instala vista baby!"},
        {"id": "05", "joke":"Quando os americanos comeram carne pela primeira vez?", "response": "Quando chegou Cristovao COM LOMBO!"},
        {"id": "06", "joke":"O que o Vegeta falou pro abacate quando foi come-lo?", "response": "Maldito Kakaroço!"},
        {"id": "07", "joke":"Qual o nome do filho do magneto?", "response": "Magbisneto!"},
        {"id": "08", "joke":"Um pato chamou outros patos pra jogar bola, como terminou o jogo?", "response": "Empatado"},
        {"id": "09", "joke":"O que aconteceu com a baleia quando tomou um tiro?", "response": "Ficou BALEADA"}
    ];

useEffect(() => {
    setPiadas(apiPiadas);
}, []);


const adicionarPiada = () => {
    if (piadas.length >= 10) {
        alert("O número de piadas foi atingido. Delete uma piada para adicionar novamente.")
        return;
    }

    const adicionar = { id: Date.now(), joke: piadaAdicionada, response: resposta};
    setPiadas(prev => [...prev, adicionar]);
    setPiadaAdicionada("");
    setResposta("");
};

const excluirPiada = (id) => {
    setPiadas(prev => prev.filter(piada => piada.id !== id));
};

const toggleResposta = (id) => {
    setVizualizarResposta(prev => ({...prev, [id]: !prev[id]}));
};

return (
    <main>
    <div className="apresentacao">
        <h1 className="apresentacao__titulo">Compass piadas</h1>
        <div  className="apresentacao__piadas">
            {piadas.map(({id, joke, response}) => (
                <div key={id}>
                <p>{joke}</p>
                <button className="apresentacao__botao_resposta" onClick={() => toggleResposta(id)}>
                    {vizualizarResposta[id] ? "Esconder resposta" : "Ver resposta"}
                </button>
                {vizualizarResposta[id] && <p>{response}</p>}
                <button className="apresentacao__botao_excluir" onClick={() => excluirPiada(id)}>
                    Excluir
                </button>
            </div>
            ))}
        </div>
        <section className="apresentacao__inputs">
            <div className="apresentacao__inputs_adicionar">
        <input type="text" placeholder="Adicionar Piada" value={piadaAdicionada} onChange={(e) => setPiadaAdicionada(e.target.value)}/>
        <input type="text" placeholder="Resposta" value={resposta} onChange={(e) => setResposta(e.target.value)}/>
        <button className="apresentacao__botao_adicionar" onClick={adicionarPiada}>
            Adicionar Piada
        </button>
            </div>
        </section>
    </div>
</main>
    );
};

export default Piadas;