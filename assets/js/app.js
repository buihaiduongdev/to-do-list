const API_BASE = 'http://localhost:3000/';
const carsBlock = document.getElementById('cars-block');

function create(resource, data) {
    return fetch(`${API_BASE + resource}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => err);
}

function read(resource, id) {
    return fetch(`${API_BASE + resource} / ${id}`)
        .then(res => res.json())
        .catch(err => err);
}

function update(resource, id, newData) {
    return fetch(`${API_BASE + resource}/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newData)
    })
        .then(res => res.json())
        .catch(err => err)
}

function remove(resource, id) {
    return fetch(`${API_BASE + resource}/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .catch(err => err)
}
// create('cars', {}).then(data => console.log(data))
// read('cars').then(data => console.log(data));
// update('cars', 'aaaa', { name: "1111" }).then(data => console.log(data));
// remove('cars', 'c577').then(a => console.log(a));