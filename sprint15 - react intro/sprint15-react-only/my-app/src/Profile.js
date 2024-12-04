import './Profile.css';

function Profile({ name = "My first" }) {
    return (
        <article>
            <h1>{name} Component</h1>
            <ol>
                <li>Components: UI Building Blocks</li>
                <li>Defining a Component</li>
                <li>Using a Component</li>
            </ol>
        </article>
    );
}

export default Profile;
