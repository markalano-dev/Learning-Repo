
interface dataRecords {
    id: number;
    name: string;
    price: number;
    location: string;
    size: string;
}

const records: dataRecords[] = [
    {id: 1, name: "Item 1", price: 10.99, location: "Aisle 1", size: "Small"},
    {id: 2, name: "Item 2", price: 15.49, location: "Aisle 2", size: "Medium"},
    {id: 3, name: "Item 3", price: 7.99, location: "Aisle 3", size: "Large"},
    {id: 4, name: "Item 4", price: 12.99, location: "Aisle 4", size: "Small"},
    {id: 5, name: "Item 5", price: 9.49, location: "Aisle 5", size: "Medium"},
]

function renderRecords (data: dataRecords[]): void {
    const container = document.getElementById("dataContainer");

    if (!container) return;

    container.innerHTML = "";

    data.forEach((record) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${record.name}</h3>
            <p>Price: $${record.price.toFixed(2)}</p>
            <p>Location: ${record.location}</p>
            <p>Size: ${record.size}</p>
        `;

        container.appendChild(card);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    renderRecords(records);
});