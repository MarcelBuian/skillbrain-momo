export default function MyProfile({ children }) {
    return (
        <article>
            <h1>My Profile Component</h1>
            <ol>
                <li>Components: UI Building Blocks</li>
            </ol>
            {children}
        </article>
    );
}
