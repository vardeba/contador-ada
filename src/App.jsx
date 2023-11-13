import { useState } from "react";
import styles from "./button.module.css";

function App() {
    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }
    return (
        <div className="container">
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button className={styles.myButton} onClick={aumentar}>
                aumentar
            </button>
        </div>
    );
}

export default App;

// Fetch
// function App() {
//     const [tarefas, setTarefas] = useState([]);
//     useEffect(() => {
//         async function buscarDados() {
//             const resultado = await fetch(
//                 "https://jsonplaceholder.typicode.com/todos"
//             );

//             const resultadoFinal = await resultado.json();

//             return resultadoFinal;
//         }

//         buscarDados().then((res) => setTarefas(res));
//     }, []);
//     return (
//         <div>
//             <h1>Buscando dados</h1>

//             <ol>
//                 {tarefas.map((tarefa) => {
//                     return (
//                         <li key={tarefa.id}>
//                             {tarefa.title}
//                             {tarefa.completed ? (
//                                 <span> - Tarefa Concluída</span>
//                             ) : null}
//                         </li>
//                     );
//                 })}
//             </ol>
//         </div>
//     );
// }

// export default App;
