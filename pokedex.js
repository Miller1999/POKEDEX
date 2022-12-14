const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            let pokeN = data.name;
            let pokeI = data.id;
            pokeImage(pokeImg);
            pokeData(pokeInfo)
            Name(pokeN)
            ID(pokeI)
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeData = (abilities) =>
{
    const pokeAbilities = document.getElementById("abilities");
    const abilitesName = abilities.map((item) => item.ability.name);
    pokeAbilities.innerHTML=abilitesName;
}
const Name = (name) =>
{
    const pokeNombre = document.getElementById("nombre");
    const nombrePok = name;
    pokeNombre.innerHTML = nombrePok;
}
const ID = (id) =>
{
    const pokeID = document.getElementById("ide");
    const idPok = id;
    pokeID.innerHTML = idPok;
}

