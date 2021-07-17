// Code Keypad Component Here

function Keypad () {
    // function handleChange() {
    //     console.log('Entering password...')
    // } 

    return (
        <input type="password" onChange={(e) => console.log('Entering password...')}></input>
    )
}

export default Keypad;