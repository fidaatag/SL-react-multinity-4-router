function Welcome() {
    return <h1>Welcome To My Paradise!</h1>;
}

export function Welcome2() {
    return <h2>Welcome h2</h2>
}

export function Welcome3() {
    return <h3>Welcome h3</h3>
}

export function Welcome4(props) {
    return <h1>{props.text}</h1>
}

export function Welcome5(props) {
    return <h1>{props.children}</h1>
}


export default Welcome;