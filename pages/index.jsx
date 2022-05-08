import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div>
            <p><Link href="/users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}
