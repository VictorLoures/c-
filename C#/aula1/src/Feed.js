import { faker } from '@faker-js/faker';

const Feed = () => {
    return (
        <div className="ui feed">
            <div className="event">
                <div className="label">
                <img  alt="imagem aqui" src={faker.image.avatar()} />
                </div>
                <div className="content">
                <div className="summary">
                    <a className="user" href="https://google.com.br">
                    {faker.name.fullName()}
                    </a> added you as a friend
                    <div className="date">
                    1 Hour Ago
                    </div>
                </div>
                <div className="meta">
                    <a className="like" href="https://google.com.br">
                    <i className="like icon"></i> 4 Likes
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;