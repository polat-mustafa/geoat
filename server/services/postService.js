const baseService = require('./baseService');

class PostService extends baseService.Post {
  constructor(title, content, userId) {
    super(title, content, userId);
  }

  static async getAllPosts() {
    const posts = await this.getAll('posts');
    return posts.map(post => new PostService(post.title, post.content, post.userId));
  }
}

module.exports = PostService;

