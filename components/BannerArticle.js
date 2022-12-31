export default function BannerArticle({article}) {
    return (
        <p dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
    );
}