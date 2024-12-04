
const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'ro-RO',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {

    const name = 'SkillBrain';

    return (
        <>
            <h1 style={{ color: "red", maxWidth: "100px" }}>{name}</h1>
            <h1>To Do List for {formatDate(today)}</h1>
            <br />
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                class="photo changed"
                my-name="Test"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}