import { getImageUrl } from "./utlis";

function Card({ children }) { /** childrenはコンポーネントの子要素を現す */
    return (
        <div className="card">
            {children} {/**コンポーネントをpropsとして渡すことができる Cardは直接Avatarをしらない。*/}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            {/* 111 */}
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}