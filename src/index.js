const messages = [
    "erick",
    "daniel",
    "perez",
    "mata",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };