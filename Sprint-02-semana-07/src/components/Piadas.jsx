import { useState, useEffect } from "react";
import axios from "axios";

const Piadas = () => {
    const [piadas, setPiadas] = useState([]);
    const [piadaAdicionada, setPiadaAdicionada] = useState("");
    const [resposta, setResposta] = useState("");
    const [visualizarResposta, setVisualizarResposta] = useState({});
    const [carregando, setCarregando] = useState(true);
    const [adicionando, setAdicionando] = useState(false);
    const [excluindo, setExcluindo] = useState(false);

    useEffect(() => {
        const carregarPiadas = async () => {
            setCarregando(true);
            try {
                const resposta = await axios.get('http://localhost:3100/Jokes');
                console.log("Piadas carregadas:", resposta.data);
                setPiadas(resposta.data);
            } catch (erro) {
                console.error("Erro ao carregar piadas:", erro);
            } finally {
                setCarregando(false);
            }
        };
        carregarPiadas();
    }, []);

    const adicionarPiada = async () => {
        if (piadas.length >= 10) {
            alert("O número máximo de piadas foi atingido. Exclua uma piada para adicionar outra.");
            return;
        }

        const novaPiada = { joke: piadaAdicionada, response: resposta };
        setAdicionando(true);
        try {
            const resposta = await axios.post('http://localhost:3100/Jokes', novaPiada);
            setPiadas(prev => [...prev, resposta.data]);
            setPiadaAdicionada("");
            setResposta("");
        } catch (erro) {
            console.error("Erro ao adicionar piada:", erro);
        } finally {
            setAdicionando(false);
        }
    };

    const excluirPiada = async (id) => {
        setExcluindo(true);
        try {
            await axios.delete(`http://localhost:3100/Jokes/${id}`);
            setPiadas(prev => prev.filter(p => p.id !== id));
        } catch (erro) {
            console.error("Erro ao excluir piada:", erro.message);
            alert("Ocorreu um erro inesperado ao excluir a piada.");
        } finally {
            setExcluindo(false);
        }
    };

    const toggleResposta = (id) => {
        setVisualizarResposta(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <main>
            <div className="apresentacao">
                <h1 className="apresentacao__titulo">Compass Piadas</h1>
                <div className="apresentacao__piadas">
                    {carregando ? (
                        <h3>Carregando...</h3>
                    ) : (
                        piadas.length > 0 ? (
                            piadas.map(({ id, joke, response }) => (
                                <div key={id}>
                                    <p>{joke}</p>
                                    <button
                                        className="apresentacao__botao_resposta"
                                        onClick={() => toggleResposta(id)}
                                        disabled={excluindo}
                                    >
                                        {visualizarResposta[id] ? "Esconder resposta" : "Ver resposta"}
                                    </button>
                                    {visualizarResposta[id] && <p>{response}</p>}
                                    <button
                                        className="apresentacao__botao_excluir"
                                        onClick={() => excluirPiada(id)}
                                        disabled={excluindo}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            ))
                        ) : (
                            <h3>Nenhuma piada encontrada.</h3>
                        )
                    )}
                </div>
                <section className="apresentacao__inputs">
                    <div className="apresentacao__inputs_adicionar">
                        <input
                            type="text"
                            placeholder="Adicionar Piada"
                            value={piadaAdicionada}
                            onChange={(e) => setPiadaAdicionada(e.target.value)}
                            disabled={adicionando}
                        />
                        <input
                            type="text"
                            placeholder="Resposta"
                            value={resposta}
                            onChange={(e) => setResposta(e.target.value)}
                            disabled={adicionando}
                        />
                        <button
                            className="apresentacao__botao_adicionar"
                            onClick={adicionarPiada}
                            disabled={adicionando}
                        >
                            {adicionando ? "Adicionando..." : "Adicionar Piada"}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Piadas;
