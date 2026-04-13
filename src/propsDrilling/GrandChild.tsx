
interface GrandChildProps {
  message: string;
}

const GrandChild = ({ message}: GrandChildProps ) => {
    return (
        <div>
            <h1>grand child</h1>
            <p>Message: {message}</p>
        </div>
    )
}

export default GrandChild
