const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const gato = document.getElementById("gato");
const trocar = document.getElementById("trocar");

const getCats = async () => {
    try {
        
        const data = await fetch(BASE_URL); //retorna outro promisse
        const json = await data.json();

        return json.webpurl;

    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async () => {
    gato.src = await getCats();
}

trocar.addEventListener("click", loadImg)

loadImg()