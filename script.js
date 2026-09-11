const tbody = document.getElementById("output");

// Initially show Loading...
tbody.innerHTML = `
    <tr>
        <td colspan="2">Loading...</td>
    </tr>
`;

function createPromise() {
    return new Promise((resolve) => {

        const start = performance.now();

        // Random delay: 1, 2, or 3 seconds
        const delay = Math.floor(Math.random() * 3 + 1) * 1000;

        setTimeout(() => {

            const end = performance.now();

            // Actual time taken in seconds
            const timeTaken = (end - start) / 1000;

            resolve(timeTaken);

        }, delay);
    });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
    .then((results) => {

        // Remove Loading...
        tbody.innerHTML = "";

        results.forEach((time, index) => {

            tbody.innerHTML += `
                <tr>
                    <td>Promise ${index + 1}</td>
                    <td>${time.toFixed(3)}</td>
                </tr>
            `;
        });

        // Longest promise = total time
        const total = Math.max(...results);

        tbody.innerHTML += `
            <tr>
                <td>Total</td>
                <td>${total.toFixed(3)}</td>
            </tr>
        `;
    });