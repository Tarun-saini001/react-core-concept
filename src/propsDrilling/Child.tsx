
import GrandChild from './GrandChild'

interface childProps {
    message: string;
}
const Child = ({ message }: childProps) => {
    return (
        <div>
            <h1>child</h1>
            <GrandChild message={message} />

        </div>
    )
}

export default Child
