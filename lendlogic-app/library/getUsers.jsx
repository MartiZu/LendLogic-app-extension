const url = "https://lendlogic-data.onrender.com/"

export default async function getUsers() {
    try {const res = await fetch(`${url}users`);

    if(!res.ok){
        throw new Error(`Something went wrong, status: ${res.status}`);
    }

    const data = await res.json();
    // console.log(data);
    return data;

    } catch (error) {
        console.log(error);
    }
}