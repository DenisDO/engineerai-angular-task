export interface IItem {
    created_at?: string;
    title?: string;
    url?: string;
    author?: string;
    points?: number;
    story_text?: string;
    comment_text?: string;
    num_comments?: number;
    story_id?: number;
    story_title?: string;
    story_url?: string;
    parent_id?: number;
    created_at_i?: number;
    relevancy_score?: number;
    _tags?: Array<string>;
    objectID?: string;
}
