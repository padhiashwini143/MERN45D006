// async await

const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            body: JSON.stringify([{ userName: "Xyz", age: 20 },{userName:"xy",age:30}]),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();
    console.log(data)
    // console.log(response)
}
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2",{
        method:"GET",
    }
    );
    const data = await response.json();
    console.log(data)
}

getData()



const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const data = await response.json();


        const div = document.getElementById("div");

        const ul = document.createElement("ul");
        data.forEach((ele) => {
            const li=document.createElement("li");
            li.innerText=ele.title;
            ul.appendChild(li)
        })

        div.append(ul)

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getData();

