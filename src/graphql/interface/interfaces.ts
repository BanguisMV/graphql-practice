export type Post = {
    title:           string;
    content:         string;
    featuredImage?:  string;
}

export type InputPost = {
    id?:  string;
    input: Post;
}

export type PostNotification = {
    id?:     string;
    message: string;
    success: boolean
}