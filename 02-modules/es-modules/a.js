export async function foo() {
    return new Promise((res, rej) => {
        res(2)
    })
}

// foo()
// .then((res) => res.json())
// .then((res) => console.log(res))