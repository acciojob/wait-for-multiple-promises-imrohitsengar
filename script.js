const tbody = document.getElementById("output");

function createPromise() {
    return new Promise((resolve) => {

        const startTime = performance.now();

        // Random delay between 1 and 3 seconds
        const delay = Math.floor(Math.random() * 3 + 1) * 1000;

        setTimeout(() => {

            const endTime = performance.now();

            // Actual time taken in seconds
            const timeTaken = (endTime - startTime) / 1000;

            resolve(timeTaken);

        }, delay);
    });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
    .then((resolvedData) => {

        // Remove Loading... row
        tbody.innerHTML = "";

        // Add Promise 1, Promise 2, Promise 3
        resolvedData.forEach((data, index) => {

            tbody.innerHTML += `
                <tr>
                    <td>Promise ${index + 1}</td>
                    <td>${data.toFixed(3)}</td>
                </tr>
            `;
        });
        // Longest promise = total time
        const totalTime = Math.max(...resolvedData);

        tbody.innerHTML += `
            <tr>
                <td>Total</td>
                <td>${totalTime.toFixed(3)}</td>
            </tr>
        `;
    });