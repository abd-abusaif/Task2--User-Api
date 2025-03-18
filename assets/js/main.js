
const getUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
};

const displayUsers = async () => {
    const users = await getUsers();
    const result = users.map((user) => {
        return `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Address:${user.address.city}, ${user.address.street}</p>
        </div>
        `;
    }).join('');

    document.querySelector(".users-grid").innerHTML = result;
};

displayUsers();
