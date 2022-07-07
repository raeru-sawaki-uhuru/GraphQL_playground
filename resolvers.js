const Users = require('./data.js');

const resolvers = {
    users: async (_) => {
        return Users;
    },
    user: async ({id}, context) => {
        return Users.find((user)=> user.id == id);
    },
    posts: async (_) => {
        // ユーザをループさせてpostsを作る
        return Users.reduce(
            (prevValue, curValue) => prevValue.concat(curValue.posts),
            []
        );
        
    },
    // thisを使うためアロー関数を廃止
    post: async function({id}, context) {
        return this.posts().then(posts => posts.find((post) => post.id == id));
    },
    // thisを使うためアロー関数を廃止
    post_title: async function({title}, context) {
        return this.posts().then(posts => posts.filter((post) => post.title.includes(title)));
    }
}

module.exports = resolvers;
