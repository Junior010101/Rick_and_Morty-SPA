import { useEffect, useState } from "react";
import { Character } from "./Character";

export const List = () => {
    const [ Loading, setLoading ] = useState(true);
    const [ Characters, setCharacters ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch (
                'https://rickandmortyapi.com/api/character');
            
            const { results } = await data.json();

            setCharacters(results);
            setLoading(false);
        }

        fetchData();
    }, [Characters.length]);

    return (
        <>
        <h2>Characters</h2>
        <div className="row">
            {Loading ? (
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                Characters.map((character) => (
                    <Character
                    key={character.id}
                    name={character.name}
                    origin={character.origin}
                    image={character.image}
                />
            ))
        )}
        </div>
        </>
    );
}
