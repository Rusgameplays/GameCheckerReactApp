import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import {useState} from "react";

function App() {
    let items = [
        'New-York',
        'Moscow',
        'London'
    ]
    const handleSelectItem = (item) => {
        console.log(item)
    }
    const [alertVisible, setAlertVisible] = useState(false)
    return <>
        <div>
            {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
            <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
            <Button onClick={() => setAlertVisible(true)}>My Button</Button>
        </div>
    </>
}

export default App