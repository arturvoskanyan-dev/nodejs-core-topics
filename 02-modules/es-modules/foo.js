export function add(num) {
    return num * 4;
}

function foo() {
    return "Hello Node JS"
}

export default function main() {
    const message = foo();
    console.log(message);
}
