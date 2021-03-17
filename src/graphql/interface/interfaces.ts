export type Post = {
    title:           string;
    content:         string;
    featuredImage?:  string;
}

export type InputPost = {
    id?:  String;
    input: Post;
}